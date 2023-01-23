import { Injectable } from '@angular/core';
import { BaseStore } from '@imager/lib-store';
import { initialState, SearcherState } from '../store/searcher-store.config';
import { lastValueFrom, Observable } from 'rxjs';
import { UnSplashPhoto, UnSplashRepository } from '@imager/lib-repositories';
import { UNSPLASH_DEFAULT_CONFIG } from '../../../configs/unsplash.config';

@Injectable()
export class SearcherService extends BaseStore<SearcherState> {
  constructor(private unsplashRepository: UnSplashRepository) {
    super(initialState);
  }

  public get photosByTextResults$(): Observable<UnSplashPhoto[]> {
    return this.select<UnSplashPhoto[]>(({ results }) => results);
  }

  public get loading$(): Observable<boolean> {
    return this.select<boolean>(({ loading }) => loading);
  }

  async findPhotosByText(text: string) {
    this.setLoadingState(true);
    const defaultConfig = { ...UNSPLASH_DEFAULT_CONFIG, text };
    const response = await lastValueFrom(this.unsplashRepository.findPicturesByText(defaultConfig));
    this.setState((previousState) => ({
      ...previousState,
      results: response.results.map((image) => ({ ...image, url: image.urls.small })),
      loading: false,
    }));
  }

  async setLoadingState(loading: boolean) {
    this.setState((previousState) => ({
      ...previousState,
      loading,
    }));
  }
}
