import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router } from "@angular/router";

@Component({
	selector: "app-zelf-keys-passwords",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule],
	templateUrl: "./zelf-keys-passwords.component.html",
	styleUrls: ["./zelf-keys-passwords.component.scss"],
})
export class ZelfKeysPasswordsComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	onAddPassword(): void {
		this.router.navigate(["/dashboard/passwords/new"]);
	}
}
