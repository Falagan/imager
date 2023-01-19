import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTER } from './app/app.router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTER, withEnabledBlockingInitialNavigation())],
}).catch((err) => console.error(err));
