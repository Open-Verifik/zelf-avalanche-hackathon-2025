import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from "rxjs";
import { ChromeService } from "../../chrome.service";
import { DataPassingService } from "../../services/data-passing.service";
import { PasswordDataService } from "../../services/password-data.service";
import { WalletService } from "../../wallet.service";
import { DataCardComponent } from "../shared/data-card.component";

@Component({
    selector: "app-zelf-keys-passwords",
    standalone: true,
    imports: [CommonModule, TranslocoModule, RouterModule, DataCardComponent, ReactiveFormsModule],
    templateUrl: "./zelf-keys-passwords.component.html",
    styleUrls: ["./zelf-keys-passwords.component.scss"],
})
export class ZelfKeysPasswordsComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    error: string | null = null;
    loading = false;
    storedPasswords: any[] = [];
    filteredPasswords: any[] = [];
    searchControl = new FormControl("");
    showFilter = false;

    constructor(
        private router: Router,
        private walletService: WalletService,
        private passwordDataService: PasswordDataService,
        private chromeService: ChromeService,
        private dataPassingService: DataPassingService
    ) {}

    async ngOnInit(): Promise<void> {
        const currentUrl = this.router.url;
        const isDecryptRoute = currentUrl.includes("/passwords/decrypt");

        if (this.chromeService.isExtension && !isDecryptRoute) {
            await this.chromeService.ensureFullScreen("dashboard/passwords");
        }

        this.loadStoredPasswords();
        this.setupSearchFilter();

        this.dataPassingService.clearData("passwords");
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    async loadStoredPasswords(): Promise<void> {
        this.loading = true;
        this.error = null;

        try {
            const response = await this.walletService.listStoredPasswords();

            if (response?.data && Array.isArray(response.data)) {
                this.storedPasswords = response.data;
            } else if (response?.data && Array.isArray(response.data.data)) {
                this.storedPasswords = response.data.data;
            } else {
                this.storedPasswords = [];
            }

            this.filteredPasswords = [...this.storedPasswords];
            this.showFilter = this.storedPasswords.length > 5;
        } catch (error) {
            this.error = "Failed to load stored passwords. Please try again.";
            this.storedPasswords = [];
        } finally {
            this.loading = false;
        }
    }

    onAddPassword(): void {
        this.router.navigate(["/dashboard/passwords/new"]);
    }

    onRefresh(): void {
        this.loadStoredPasswords();
    }

    onPasswordClick(password: any): void {
        this.passwordDataService.setCurrentPassword(password);

        this.router.navigate(["/dashboard/passwords/detail"]);
    }

    trackByPassword(index: number, password: any): any {
        return password.publicData?.id || password.publicData?.title || index;
    }

    private setupSearchFilter(): void {
        this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((searchTerm) => {
            this.filterPasswords(searchTerm || "");
        });
    }

    private filterPasswords(searchTerm: string): void {
        if (!searchTerm.trim()) {
            this.filteredPasswords = [...this.storedPasswords];
            return;
        }

        const term = searchTerm.toLowerCase();
        this.filteredPasswords = this.storedPasswords.filter((password) => {
            const title = this.getPasswordTitle(password).toLowerCase();
            const subtitle = this.getPasswordSubtitle(password).toLowerCase();

            return title.includes(term) || subtitle.includes(term);
        });
    }

    private getPasswordTitle(password: any): string {
        if (password.publicData?.website) {
            try {
                const url = new URL(password.publicData.website);
                return url.hostname;
            } catch {
                return password.publicData.website;
            }
        }
        if (password.publicData?.title) return password.publicData.title;
        if (password.title) return password.title;
        if (password.name) {
            return (
                password.name
                    ?.replace(/\.png$/, "")
                    .split("_")
                    .pop() || "Untitled"
            );
        }
        return "Untitled";
    }

    private getPasswordSubtitle(password: any): string {
        if (password.publicData?.username) return `Username: ${password.publicData.username}`;
        if (password.publicData?.description) return password.publicData.description;
        if (password.subtitle) return password.subtitle;
        if (password.publicData?.zelfName) return `Zelf Name: ${password.publicData.zelfName}`;
        if (password.publicData?.category) return `Category: ${password.publicData.category}`;
        if (password.publicData?.type) return `Type: ${password.publicData.type}`;
        return "Secure credential";
    }
}
