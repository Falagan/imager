import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'imager-searcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearcherComponent {}
