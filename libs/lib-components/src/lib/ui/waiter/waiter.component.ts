import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'imager-waiter',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaiterComponent {
  @Input() diameter = 100;
  @Input() text? = '';
}
