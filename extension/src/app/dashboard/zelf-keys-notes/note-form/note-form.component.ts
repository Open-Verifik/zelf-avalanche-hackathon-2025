import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ChromeService } from "../../../chrome.service";
import { DataPassingService } from "../../../services/data-passing.service";
import { DataBiometricsComponent } from "../../shared/data-biometrics.component";

@Component({
	selector: "app-note-form",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule, FormsModule, DataBiometricsComponent],
	templateUrl: "./note-form.component.html",
	styleUrls: ["./note-form.component.scss"],
})
export class NoteFormComponent implements OnInit {
	noteData = {
		title: "Meeting Notes",
		keyValuePairs: [
			{ key: "Date", value: new Date().toLocaleDateString() },
			{ key: "Location", value: "Conference Room A" },
			{ key: "Attendees", value: "Team Members" },
			{ key: "Agenda", value: "Q1 Planning" },
			{ key: "Notes", value: "Discussed project timeline and goals..." },
		],
		folder: "Work",
		insideFolder: true,
		useMasterPassword: false,
		masterPassword: "",
	};

	isNewNote = true;
	formValid = false;
	maxKeyValuePairs = 10;
	showBiometrics = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService
	) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better security when handling notes
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/notes/new");
		}

		// Check if this is a new note or editing existing
		const id = this.route.snapshot.paramMap.get("id");
		this.isNewNote = id === "new";

		if (!this.isNewNote) {
			// TODO: Load existing note data
			// this.loadNoteData(id);
		}

		this.checkFormValidity();
	}

	toggleFolder(): void {
		this.noteData.insideFolder = !this.noteData.insideFolder;
	}

	toggleMasterPassword(): void {
		this.noteData.useMasterPassword = !this.noteData.useMasterPassword;
		if (!this.noteData.useMasterPassword) {
			this.noteData.masterPassword = ""; // Clear password when toggling off
		}
		this.checkFormValidity();
	}

	addKeyValuePair(): void {
		if (this.noteData.keyValuePairs.length < this.maxKeyValuePairs) {
			this.noteData.keyValuePairs.push({ key: "", value: "" });
			this.checkFormValidity();
		}
	}

	removeKeyValuePair(index: number): void {
		if (this.noteData.keyValuePairs.length > 1) {
			this.noteData.keyValuePairs.splice(index, 1);
			this.checkFormValidity();
		}
	}

	checkFormValidity(): void {
		const hasTitle = !!this.noteData.title.trim();
		const hasValidPairs = this.noteData.keyValuePairs.every((pair) => pair.key.trim() && pair.value.trim());

		// Master password is optional - only validate if user chose to use it
		const hasValidMasterPassword = !this.noteData.useMasterPassword || (this.noteData.useMasterPassword && !!this.noteData.masterPassword.trim());

		// Backend validation requirements:
		// - title: required, minLength: 1, maxLength: 100
		// - keyValuePairs: required, minKeys: 1, maxKeys: 10
		// - masterPassword: optional (only if user enables it)

		this.formValid = hasTitle && hasValidPairs && hasValidMasterPassword;
	}

	onCancel(): void {
		this.router.navigate(["/dashboard/notes"]);
	}

	onBiometricsSuccess(biometricData: any): void {
		// Navigate to result page after successful biometrics
		this.router.navigate(["/dashboard/notes/result"]);
	}

	onBiometricsCancel(): void {
		this.showBiometrics = false;
	}

	async onSave(): Promise<void> {
		if (!this.formValid) {
			return;
		}

		// Store data in service instead of query params
		const formData = {
			...this.noteData,
			type: "notes",
		};

		await this.dataPassingService.storeData("notes", formData);

		// Show biometrics modal instead of navigating
		this.showBiometrics = true;
	}
}
