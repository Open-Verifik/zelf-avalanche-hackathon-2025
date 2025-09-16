import { CommonModule } from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";

import { environment } from "environments/environment";
import { HttpInterceptorProviders } from "./interceptors";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TranslocoRootModule } from "./core/transloco-root.module";
import { HttpWrapperService } from "./http-wrapper.service";

import { LicenseService } from "./services/license.service";
import { ZelfLoaderComponent } from "./zelf-loader/zelf-loader.component";

/**
 * Factory function for APP_INITIALIZER to load license before app starts
 */
export function initializeLicense(licenseService: LicenseService) {
    return (): Promise<any> => {
        return new Promise((resolve) => {
            // Wait a bit to ensure services are ready
            setTimeout(async () => {
                await licenseService.initializeLicense();
                resolve(true);
            }, 1000);
        });
    };
}

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [AppRoutingModule, TranslocoRootModule, BrowserModule, CommonModule, ZelfLoaderComponent],
    providers: [
        HttpInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        {
            provide: APP_INITIALIZER,
            useFactory: initializeLicense,
            deps: [LicenseService],
            multi: true,
        },
    ],
})
export class AppModule {
    constructor(
        private router: Router,
        private _httpWrapperService: HttpWrapperService
    ) {
        if (!this.isMobileDevice() || !environment.production) return;

        this.router.navigate(["/external-link"], { queryParams: { url: "https://zelf.world/download" } });
    }

    private isMobileDevice(): boolean {
        const userAgent = navigator.userAgent || navigator.vendor;

        return /android|iphone|ipad|ipod/i.test(userAgent);
    }
}
