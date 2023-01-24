import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutService } from './services/layout.service';
import {
  BorderRadiusDirective,
  HeaderComponent,
  MenuItem,
  MenuListComponent,
  SideMenuComponent,
} from '@imager/lib-components';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LANGUAGE } from '../configs/translation.config';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

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
    MatButtonToggleModule,
    TranslateModule,
    MatListModule,
    MatMenuModule,
    MenuListComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public sideMenuOpened$ = this.layoutService.sideMenuOpened$;
  public sideMenuPosition$ = this.layoutService.sideMenuPosition$;
  public mainMenuItems$ = this.layoutService.mainMenuItems$;
  public languages$ = this.layoutService.languages$;
  public currentLanguage$ = this.layoutService.currentLanguage$;

  constructor(private layoutService: LayoutService, private router: Router) {}

  toggleSideMenu() {
    this.layoutService.setSideMenuOpened();
  }

  toggleTheme() {
    this.layoutService.setTheme();
  }

  setLanguage({ value }: { value: LANGUAGE }) {
    this.layoutService.setLanguage(value);
  }

  gotTo(menuItem: MenuItem) {
    this.router.navigate([menuItem.path]);
  }

  trackByLanguage = (index: number, item: LANGUAGE) => item;
}
