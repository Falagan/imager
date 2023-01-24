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
import { NoRecordsComponent, WaiterComponent } from '@imager/lib-components';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { UnSplashPhoto } from '@imager/lib-repositories';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'imager-search-results',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    WaiterComponent,
    NoRecordsComponent,
    TranslateModule,
    MatButtonModule,
    MatChipsModule,
  ],
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
  @Input() altProp!: string;
  @Output() changed = new EventEmitter<void>();

  ngAfterViewInit(): void {
    this.imagesList.changes.subscribe(() => {
      this.changed.emit();
    });
  }

  onSelectImage(image: UnSplashPhoto) {
    window.open(image.links.html, '_blank');
  }

  trackByImage = (index: number, item: any) => item.id;

  trackByTag = (index: number, item: any) => item.type;
}
