import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, DestroyRef, OnInit } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { Wallet } from "app/wallet";
import { WalletService } from "app/wallet.service";
import { ChromeService } from "../../../chrome.service";
import { AutofillDataService, AutofillUrlInfo } from "../../../services/autofill-data.service";
import { DataPassingService } from "../../../services/data-passing.service";
import { BiometricsBottomSheetComponent, BiometricResult, BiometricsBottomSheetData } from "../../shared/biometrics-bottom-sheet.component";

@Component({
    selector: "app-password-form",
    standalone: true,
    imports: [CommonModule, TranslocoModule, RouterModule, ReactiveFormsModule],
    templateUrl: "./password-form.component.html",
    styleUrls: ["./password-form.component.scss"],
})
export class PasswordFormComponent implements OnInit {
    passwordForm!: FormGroup;

    view?: string;
    shareables: any;
    wallet!: Wallet;
    hasMasterPassword = false;
    isNewPassword = true;
    showPassword = false;
    showMasterPassword = false;
    formValid = false;
    transformedPasswordData: any = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private chromeService: ChromeService,
        private dataPassingService: DataPassingService,
        private _destroyRef: DestroyRef,
        private _walletService: WalletService,
        private _changeDetectorRef: ChangeDetectorRef,
        private autofillDataService: AutofillDataService,
        private formBuilder: FormBuilder,
        private _bottomSheet: MatBottomSheet
    ) {
        this.view = this.route.snapshot.queryParamMap.get("view") || "home";

        this.shareables = {
            selectedTab: "assets",
            view: this.view,
            wallet: {},
        };

        this.initializeForm();
        this.setupAutofillSubscription();
    }

    private initializeForm(): void {
        this.passwordForm = this.formBuilder.group({
            url: ["https://google.com", [Validators.required]],
            title: ["Google Personal", [Validators.required]],
            email: ["juliet@google.com", [Validators.required, Validators.email]],
            password: ["mypassword123", [Validators.required]],
            notes: ["My google account"],
            folder: ["My Favorites"],
            insideFolder: [true],
            masterPassword: [""],
        });

        // Subscribe to form changes to update validation
        this.passwordForm.valueChanges.subscribe(() => {
            this.checkFormValidity();
        });
    }

    async ngOnInit(): Promise<void> {
        // Ensure extension is in full screen mode for better security when handling passwords
        if (this.chromeService.isExtension) {
            await this.chromeService.ensureFullScreen("dashboard/passwords/new");
        }

        // Check if this is a new password or editing existing
        const id = this.route.snapshot.paramMap.get("id");

        this.isNewPassword = id === "new";

        if (!this.isNewPassword) {
            // TODO: Load existing password data
            // this.loadPasswordData(id);
        }

        await this._setWallet();

        this.checkFormValidity();
    }

    private async _setWallet(): Promise<any> {
        const wallet = await this._walletService.getFirstWalletFromStorage();

        if (!wallet?.name) {
            this.router.navigate(["/welcome"]);

            return;
        }

        this.shareables.wallet = wallet;
        this.wallet = this.shareables.wallet;
        this.hasMasterPassword = wallet.hasPassword || false;

        this._changeDetectorRef.detectChanges();

        this.checkFormValidity();
    }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    toggleMasterPasswordVisibility(): void {
        this.showMasterPassword = !this.showMasterPassword;
    }

    toggleFolder(): void {
        const currentValue = this.passwordForm.get("insideFolder")?.value;

        this.passwordForm.patchValue({ insideFolder: !currentValue });
    }

    checkFormValidity(): void {
        const formValue = this.passwordForm.value;
        const hasUrl = !!formValue.url;
        const hasTitle = !!formValue.title;
        const hasEmail = !!formValue.email;
        const hasPassword = !!formValue.password;
        const hasMasterPassword = !!formValue.masterPassword;

        // Master password is only required if the wallet has a password
        const masterPasswordValid = this.hasMasterPassword ? hasMasterPassword : true;

        this.formValid = !!(hasUrl && hasTitle && hasEmail && hasPassword && masterPasswordValid);
    }

    onCancel(): void {
        this.router.navigate(["/dashboard/passwords"]);
    }

    onBiometricsSuccess(biometricData: BiometricResult): void {
        // Navigate to result page after successful biometrics
        this.router.navigate(["/dashboard/passwords/result"]);
    }

    onBiometricsCancel(): void {
        // Bottom sheet handles its own dismissal
    }

    async onSave(): Promise<void> {
        if (!this.formValid) {
            return;
        }

        const formValue = this.passwordForm.value;

        // Transform password data to match backend API expectations
        this.transformedPasswordData = {
            url: formValue.url,
            title: formValue.title,
            email: formValue.email,
            password: formValue.password,
            notes: formValue.notes,
            folder: formValue.folder,
            insideFolder: formValue.insideFolder,
            masterPassword: formValue.masterPassword,
            type: "passwords",
        };

        await this.dataPassingService.storeData("passwords", this.transformedPasswordData);

        // Show biometrics bottom sheet instead of navigating
        this._openBiometricsBottomSheet();
    }

    private setupAutofillSubscription(): void {
        this.autofillDataService.urlInfo$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((urlInfo: AutofillUrlInfo | null) => {
            if (!urlInfo) return;

            this.populateFormFromAutofill(urlInfo);

            this.autofillDataService.clearUrlInfo();
        });
    }

    private populateFormFromAutofill(urlInfo: AutofillUrlInfo): void {
        // Update the form with autofill data
        this.passwordForm.patchValue({
            url: urlInfo.href,
            title: urlInfo.title || this.generateTitleFromUrl(urlInfo),
        });

        // Trigger change detection
        this._changeDetectorRef.detectChanges();
        this.checkFormValidity();
    }

    private generateTitleFromUrl(urlInfo: AutofillUrlInfo): string {
        return this.autofillDataService.generateTitleFromUrl(urlInfo);
    }

    private _openBiometricsBottomSheet(): void {
        const data: BiometricsBottomSheetData = {
            itemData: this.transformedPasswordData,
            itemType: "password",
            mode: "encrypt",
        };

        const bottomSheetRef = this._bottomSheet.open(BiometricsBottomSheetComponent, {
            data: data,
            backdropClass: "zelf-backdrop",
            panelClass: "zelf-bottom-sheet-biometrics",
        });

        bottomSheetRef.afterDismissed().subscribe((result: BiometricResult | undefined) => {
            if (result) {
                this.onBiometricsSuccess(result);
            } else {
                this.onBiometricsCancel();
            }
        });
    }
}
