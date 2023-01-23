import { UnSplashPhoto } from '@imager/lib-repositories';

export interface SearcherState {
  results: UnSplashPhoto[];
  loading: boolean;
}

export const initialState: SearcherState = {
  results: [],
  loading: false,
};
