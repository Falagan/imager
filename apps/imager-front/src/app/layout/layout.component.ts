import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './services/layout.service';
import { BorderRadiusDirective, HeaderComponent, SideMenuComponent } from '@imager/lib-components';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'imager-front-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet,
    SideMenuComponent,
    MatSlideToggleModule,
    MatButtonModule,
    BorderRadiusDirective,
    MatIconModule,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public sideMenuOpened$ = this.layoutService.sideMenuOpened$;
  public sideMenuPosition$ = this.layoutService.sideMenuPosition$;

  constructor(private layoutService: LayoutService) {
    this.layoutService.theme$.subscribe((theme) => {
      console.log(theme);
    });
  }

  toggleSideMenu() {
    this.layoutService.setSideMenuOpened();
  }

  toggleTheme() {
    this.layoutService.setTheme();
  }
}
