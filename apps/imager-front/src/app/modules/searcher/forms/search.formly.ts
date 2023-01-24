import { FormlyFormOptions } from '@ngx-formly/core';
import { FormlyBuilder, FormlyForm, INPUT_TYPE } from '@imager/lib-formly';
import { Search } from '../models/search.model';

const options: FormlyFormOptions = {
  formState: {
    awesomeIsForced: false,
  },
};

const model: Search = {
  searchText: '',
};

const searchTextField = FormlyBuilder.field(
  'searchText',
  INPUT_TYPE,
  {
    label: 'SEARCHER.SEARCH',
    placeholder: 'SEARCHER.SEARCH_PLACEHOLDER',
    minLength: 3,
  },
  {
    validators: { validation: [] },
    modelOptions: {
      debounce: {
        default: 250,
      },
    },
  },
  'col-12',
);

const row = FormlyBuilder.row([searchTextField]);

export const SearchForm: FormlyForm<Search> = FormlyBuilder.build<Search>([row], options, model)();
