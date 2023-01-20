import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTER } from './app/app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTER, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
