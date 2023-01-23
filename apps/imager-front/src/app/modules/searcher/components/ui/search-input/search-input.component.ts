import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchForm } from '../../../forms/search.formly';
import { FormlyModule } from '@ngx-formly/core';
import { Search } from '../../../models/search.model';

@Component({
  selector: 'imager-search-input',
  standalone: true,
  imports: [CommonModule, FormlyModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Output() textToSearch = new EventEmitter();
  public formlyForm = SearchForm;

  onModelChanges(model: Search) {
    this.textToSearch.emit(model.searchText);
  }
}
