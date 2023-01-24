import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'imager-no-records',
  templateUrl: './no-records.component.html',
  styleUrls: ['./no-records.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
})
export class NoRecordsComponent {
  @Input() message!: string;
}
