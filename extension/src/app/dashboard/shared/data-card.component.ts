import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface DataCardItem {
	id?: string;
	name?: string;
	url?: string;
	size?: number;
	timestamp?: string;
	publicData?: any;
	metadata?: any;
	zelfQR?: string;
	zelfProof?: string;
	ipfs?: any;
	category?: string;
	// For backward compatibility
	title?: string;
	subtitle?: string;
	description?: string;
	qrCode?: string;
	type?: string;
}

@Component({
	selector: "app-data-card",
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="data-card" (click)="onCardClick()">
			<div class="card-left">
				<div class="app-logo">
					<span class="logo-icon">{{ getIcon() }}</span>
				</div>
				<div class="app-info">
					<h4 class="app-name">{{ getTitle() }}</h4>
					<p class="app-email">{{ getSubtitle() }}</p>
				</div>
				<button class="launch-btn" (click)="onLaunchClick($event)">
					<span class="btn-text">Launch</span>
					<svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
						<path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>

			<div class="card-right">
				<div class="qr-code">
					<img *ngIf="getQRCodeUrl()" [src]="getQRCodeUrl()" alt="QR Code" />
					<div *ngIf="!getQRCodeUrl()" class="qr-placeholder">
						<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
							<path d="M3 3h6v6H3V3zM15 3h6v6h-6V3zM3 15h6v6H3v-6zM15 15h6v6h-6v-6z" fill="#ccc" />
							<path d="M6 6h2v2H6V6zM16 6h2v2h-2V6zM6 16h2v2H6v-2zM16 16h2v2h-2v-2z" fill="#999" />
						</svg>
						<span>No QR</span>
					</div>
				</div>
				<div class="card-actions">
					<button class="options-btn" (click)="onOptionsClick($event)">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
							<path
								d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
								fill="currentColor"
							/>
							<path
								d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
								fill="currentColor"
							/>
							<path
								d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	`,
	styleUrls: ["./data-card.component.scss"],
})
export class DataCardComponent {
	@Input() item!: DataCardItem;
	@Input() category: string = "default";
	@Output() cardClick = new EventEmitter<DataCardItem>();
	@Output() launchClick = new EventEmitter<DataCardItem>();
	@Output() optionsClick = new EventEmitter<DataCardItem>();

	getIcon(): string {
		switch (this.category) {
			case "password":
				return "🔐";
			case "notes":
				return "📝";
			case "addresses":
				return "📍";
			case "payment-cards":
				return "💳";
			case "bank-accounts":
				return "🏦";
			case "contacts":
				return "👤";
			default:
				return "📄";
		}
	}

	getTitle(): string {
		// Handle backend response structure
		if (this.item.publicData?.website) {
			return this.item.publicData.website;
		}
		if (this.item.publicData?.title) {
			return this.item.publicData.title;
		}
		if (this.item.title) {
			return this.item.title;
		}
		if (this.item.name) {
			// Extract meaningful name from filename
			const name =
				this.item.name
					.replace(/\.png$/, "")
					.split("_")
					.pop() || "";
			return name || "Untitled";
		}
		return "Untitled";
	}

	getSubtitle(): string {
		// Handle backend response structure
		if (this.item.publicData?.username) {
			return this.item.publicData.username;
		}
		if (this.item.publicData?.description) {
			return this.item.publicData.description;
		}
		if (this.item.subtitle) {
			return this.item.subtitle;
		}
		if (this.item.publicData?.zelfName) {
			return this.item.publicData.zelfName;
		}
		return "No description";
	}

	getQRCodeUrl(): string | null {
		// Handle backend response structure - QR code is in the url field
		if (this.item.url) {
			return this.item.url;
		}
		if (this.item.zelfQR) {
			return this.item.zelfQR;
		}
		if (this.item.qrCode) {
			return this.item.qrCode;
		}
		return null;
	}

	onCardClick(): void {
		this.cardClick.emit(this.item);
	}

	onLaunchClick(event: Event): void {
		event.stopPropagation();
		this.launchClick.emit(this.item);
	}

	onOptionsClick(event: Event): void {
		event.stopPropagation();
		this.optionsClick.emit(this.item);
	}
}
