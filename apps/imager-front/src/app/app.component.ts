import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from './layout/services/layout.service';
import { UNSPLASH_API_KEY, UNSPLASH_API_URL } from '@imager/lib-repositories';
import { NX_UNSPLASH_API_KEY, NX_UNSPLASH_API_URL } from './configs/init-app.config';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [
    { provide: UNSPLASH_API_KEY, useValue: process.env[NX_UNSPLASH_API_KEY] },
    { provide: UNSPLASH_API_URL, useValue: process.env[NX_UNSPLASH_API_URL] },
  ],
  selector: 'imager-root',
  template: ` <div [ngClass]="theme$ | async" class="mat-app-background">
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
  public theme$ = this.layoutService.theme$;
  constructor(private layoutService: LayoutService) {}
}
