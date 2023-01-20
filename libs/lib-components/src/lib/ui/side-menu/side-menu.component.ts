import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SIDE_MENU_POSITIONS } from './consts';
import { BorderRadiusDirective } from '../../directives';

@Component({
  selector: 'imager-front-side-menu',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, BorderRadiusDirective],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  @Input() isOpen: boolean | null = false;
  @Input() marginTop = 0;
  @Input() marginBottom = 0;
  @Input() position: SIDE_MENU_POSITIONS | null = SIDE_MENU_POSITIONS.START;
  public sideMenuPositions = SIDE_MENU_POSITIONS;
}
