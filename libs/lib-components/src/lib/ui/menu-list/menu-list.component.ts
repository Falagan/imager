import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from './consts';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'imager-menu-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, TranslateModule, MatButtonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent {
  @Input() items: MenuItem[] | null = [];
  @Output() itemClicked = new EventEmitter<MenuItem>();
  trackByMenuItem = (index: number, item: MenuItem) => item.id;

  onItemClicked(item: MenuItem) {
    this.itemClicked.emit(item);
  }
}
