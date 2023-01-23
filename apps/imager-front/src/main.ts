import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTER } from './app/app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { FORMLY_CONFIG, FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FORMLY_GLOBAL_CONFIG } from './app/configs/formly.config';
import { registerTranslateExtension } from '@imager/lib-formly';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TRANSLATION_GLOBAL_CONFIG } from './app/configs/translation.config';
import { LayoutService } from './app/layout/services/layout.service';
import { LoadGlobalConfiguration } from './app/configs/init-app.config';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: LoadGlobalConfiguration,
      multi: true,
      deps: [LayoutService],
    },
    provideRouter(APP_ROUTER, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TranslateModule.forRoot(TRANSLATION_GLOBAL_CONFIG)),
    importProvidersFrom(FormlyModule.forRoot(FORMLY_GLOBAL_CONFIG)),
    importProvidersFrom(FormlyMaterialModule),
    { provide: FORMLY_CONFIG, multi: true, useFactory: registerTranslateExtension, deps: [TranslateService] },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
}).catch((err) => console.error(err));
