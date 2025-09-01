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
		content: `Date: ${new Date().toLocaleDateString()}
Location: Conference Room A
Attendees: Team Members

Agenda: Q1 Planning

Notes:
- Discussed project timeline and goals
- Reviewed budget allocation
- Set quarterly objectives
- Assigned team responsibilities

Next Steps:
- Finalize project roadmap
- Schedule follow-up meeting
- Prepare detailed budget proposal`,
		folder: "Work",
		insideFolder: true,
		useMasterPassword: false,
		masterPassword: "",
	};

	isNewNote = true;
	formValid = false;
	showBiometrics = false;
	transformedNoteData: any = null;

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
		// For now, this route is always for creating new notes
		// TODO: Add edit route like "notes/edit/:id" for editing existing notes
		this.isNewNote = true;

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

	checkFormValidity(): void {
		const hasTitle = !!this.noteData.title.trim();
		const hasContent = !!this.noteData.content.trim();

		// Master password is optional - only validate if user chose to use it
		const hasValidMasterPassword = !this.noteData.useMasterPassword || (this.noteData.useMasterPassword && !!this.noteData.masterPassword.trim());

		// Backend validation requirements:
		// - title: required, minLength: 1, maxLength: 100
		// - content: required, minLength: 1
		// - masterPassword: optional (only if user enables it)

		this.formValid = hasTitle && hasContent && hasValidMasterPassword;
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

		// Transform note data to match backend API expectations
		// Convert content to keyValuePairs format
		this.transformedNoteData = {
			title: this.noteData.title,
			keyValuePairs: {
				content: this.noteData.content,
			},
			folder: this.noteData.folder,
			insideFolder: this.noteData.insideFolder,
			useMasterPassword: this.noteData.useMasterPassword,
			masterPassword: this.noteData.masterPassword,
			type: "notes",
		};

		await this.dataPassingService.storeData("notes", this.transformedNoteData);

		// Show biometrics modal instead of navigating
		this.showBiometrics = true;
	}
}
