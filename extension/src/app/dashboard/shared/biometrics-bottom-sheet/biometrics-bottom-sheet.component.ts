import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from "@angular/material/bottom-sheet";

import { DecryptedItemData } from "../../../models/zelf-key-item.model";
import { DataBiometricsComponent } from "../data-biometrics/data-biometrics.component";

export interface BiometricResult {
    faceBase64: string;
    password?: string;
    retrievedData?: DecryptedItemData;
}

export interface BiometricsBottomSheetData {
    itemData: any;
    itemType: string;
    mode: "encrypt" | "decrypt";
}

@Component({
    imports: [CommonModule, DataBiometricsComponent],
    selector: "app-biometrics-bottom-sheet",
    standalone: true,
    styleUrls: ["./biometrics-bottom-sheet.component.scss"],
    templateUrl: "./biometrics-bottom-sheet.component.html",
})
export class BiometricsBottomSheetComponent {
    itemData: any;
    itemType: string;
    mode: "encrypt" | "decrypt";

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: BiometricsBottomSheetData,
        private _bottomSheetRef: MatBottomSheetRef<BiometricsBottomSheetComponent>
    ) {
        this.itemData = data.itemData;
        this.itemType = data.itemType;
        this.mode = data.mode;
    }

    getTitle(): string {
        const action = this.mode === "encrypt" ? "Encrypt" : "Decrypt";

        switch (this.itemType) {
            case "payment-card":
                return `Verify Identity to ${action} Payment Card`;
            case "note":
                return `Verify Identity to ${action} Note`;
            case "password":
            default:
                return `Verify Identity to ${action} Password`;
        }
    }

    getInstructions(): string {
        switch (this.itemType) {
            case "payment-card":
                return "Please verify your face to decrypt your payment card";
            case "note":
                return "Please verify your face to decrypt your note";
            case "password":
            default:
                return "Please verify your face to decrypt your password";
        }
    }

    getItemType(): string {
        switch (this.itemType) {
            case "password":
                return "Password";
            case "note":
                return "Note";
            case "payment-card":
                return "Payment Card";
            default:
                return "Item";
        }
    }

    getItemInfo(): string {
        if (!this.itemData) return "";

        switch (this.itemType) {
            case "password":
                if (this.itemData?.publicData?.website) {
                    try {
                        const url = new URL(this.itemData?.publicData?.website);

                        return url.hostname;
                    } catch {
                        return this.itemData?.publicData?.website;
                    }
                }

                return this.itemData.username || "Password";

            case "payment-card":
                if (this.itemData.cardNumber) {
                    const cardNumber = this.itemData.cardNumber.replace(/\s/g, "");

                    return `**** **** **** ${cardNumber.slice(-4)}`;
                }

                return this.itemData.cardName || "Payment Card";

            case "note":
                return this.itemData.title || "Note";

            default:
                return "Item";
        }
    }

    onBiometricsSuccess(biometricData: BiometricResult): void {
        this._bottomSheetRef.dismiss(biometricData);
    }

    onBiometricsCancel(): void {
        this._bottomSheetRef.dismiss();
    }

    onClose(): void {
        this._bottomSheetRef.dismiss();
    }
}
