import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    imports: [CommonModule, RouterModule],
    selector: "subscription-banner",
    styleUrls: ["./subscription-banner.component.scss"],
    templateUrl: "./subscription-banner.component.html",
})
export class SubscriptionBannerComponent {
    @Input() title: string = "Unlock Premium Features";
    @Input() description: string = "Get unlimited access, advanced security, and more with ZelfKeys Premium";
    @Input() route: string[] = ["/dashboard/billing"];
}
