import { SearchParams, UnSplashPhoto } from '@imager/lib-repositories';
import { UNSPLASH_DEFAULT_CONFIG } from '../../../configs/unsplash.config';

export interface SearcherState {
  results: UnSplashPhoto[];
  resultsRendered: boolean;
  loading: boolean;
  searchParams: SearchParams;
  isLastPage: boolean;
}

export const initialState: SearcherState = {
  results: [],
  resultsRendered: true,
  loading: false,
  isLastPage: true,
  searchParams: UNSPLASH_DEFAULT_CONFIG,
};
