import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherService } from './services/searcher.service';
import { SearchInputComponent } from './components/ui/search-input/search-input.component';
import { SearchResultsComponent } from './components/ui/search-results/search-results.component';
import { AutoScrollDirective, BorderRadiusDirective } from '@imager/lib-components';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { UNSPLASH_DEFAULT_CONFIG } from '../../configs/unsplash.config';

@Component({
  selector: 'imager-searcher',
  standalone: true,
  imports: [
    CommonModule,
    SearchInputComponent,
    SearchResultsComponent,
    BorderRadiusDirective,
    TranslateModule,
    MatButtonModule,
    AutoScrollDirective,
  ],
  providers: [SearcherService],
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearcherComponent {
  public resultsRendered$ = this.searcherService.resultsRendered$;
  public searchResults$ = this.searcherService.photosByTextResults$;
  public isLastPage$ = this.searcherService.isLastPage$;
  public loading$ = this.searcherService.loading$;

  constructor(private searcherService: SearcherService) {}

  public onSearch(text: string) {
    this.searcherService.setLoadingState(true);
    this.searcherService.findPhotosByText({ ...UNSPLASH_DEFAULT_CONFIG, text });
  }

  public loadMore() {
    this.searcherService.setResultsRenderedState(false);
    this.searcherService.loadNextPage();
  }

  public onAutoScroll() {
    this.searcherService.setResultsRenderedState(true);
  }
}
