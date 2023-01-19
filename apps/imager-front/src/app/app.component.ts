import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutStore } from './layout/store/layout.store';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [LayoutStore],
  selector: 'imager-root',
  template: ` <div [ngClass]="theme$ | async">
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
  public theme$ = this.layoutStore.theme$;
  constructor(private layoutStore: LayoutStore) {}
}
