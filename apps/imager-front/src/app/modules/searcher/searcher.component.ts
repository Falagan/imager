import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherService } from './services/searcher.service';
import { SearchInputComponent } from './components/ui/search-input/search-input.component';
import { SearchResultsComponent } from './components/ui/search-results/search-results.component';
import { BorderRadiusDirective } from '@imager/lib-components';

@Component({
  selector: 'imager-searcher',
  standalone: true,
  imports: [CommonModule, SearchInputComponent, SearchResultsComponent, BorderRadiusDirective],
  providers: [SearcherService],
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearcherComponent {
  public searchResults$ = this.searcherService.photosByTextResults$;
  public loading$ = this.searcherService.loading$;

  constructor(private searcherService: SearcherService) {}

  onSearch(text: string) {
    this.searcherService.findPhotosByText(text);
  }
}
