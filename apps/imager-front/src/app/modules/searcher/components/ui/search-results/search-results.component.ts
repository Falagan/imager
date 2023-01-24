import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NoRecordsComponent, WaiterComponent } from '@imager/lib-components';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'imager-search-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgxSkeletonLoaderModule, WaiterComponent, NoRecordsComponent, TranslateModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements AfterViewInit {
  @ViewChildren('imagesList') imagesList!: QueryList<any>;
  @Input() images: any[] | null = [];
  @Input() loading: boolean | null = false;
  @Input() imageSrcProp!: string;
  @Input() imageDescriptionProp!: string;
  @Output() changed = new EventEmitter<void>();

  ngAfterViewInit(): void {
    this.imagesList.changes.subscribe(() => {
      this.changed.emit();
    });
  }

  trackByImage = (index: number, item: any) => item.id;
}
