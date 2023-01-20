import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from './layout/services/layout.service';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'imager-root',
  template: ` <div [ngClass]="theme$ | async" class="mat-app-background">
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
  public theme$ = this.layoutService.theme$;
  constructor(private layoutService: LayoutService) {}
}
