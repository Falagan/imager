import { Injectable } from '@angular/core';
import { BaseStore } from '@imager/lib-store';
import { initialState, SearcherState } from '../store/searcher-store.config';
import { lastValueFrom, Observable } from 'rxjs';
import { SearchParams, UnSplashPhoto, UnSplashRepository } from '@imager/lib-repositories';

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

  public get isLastPage$(): Observable<boolean> {
    return this.select<boolean>(({ isLastPage }) => isLastPage);
  }

  public get resultsRendered$(): Observable<boolean> {
    return this.select<boolean>(({ resultsRendered }) => resultsRendered);
  }

  async findPhotosByText(params?: SearchParams) {
    if (params && params.text) {
      const searchParams = { ...this.getState().searchParams, ...params };
      const response = await lastValueFrom(this.unsplashRepository.findPicturesByText(searchParams));
      this.setState((previousState) => ({
        ...previousState,
        results: this.setImages(response.results),
        isLastPage: this.checkIfIsLastPage(response.total_pages, searchParams.page),
        searchParams,
        loading: false,
      }));
    } else {
      this.resetState();
    }
  }

  async loadNextPage() {
    const { searchParams } = this.getState();
    await this.findPhotosByText({
      ...searchParams,
      page: searchParams.page + 1,
    });
  }

  async setResultsRenderedState(resultsRendered: boolean) {
    this.setState((previousState) => ({
      ...previousState,
      resultsRendered,
    }));
  }

  async setLoadingState(loading: boolean) {
    this.setState((previousState) => ({
      ...previousState,
      loading,
    }));
  }

  // UTILS

  private setImages(images: UnSplashPhoto[]) {
    const parsedImages = images.map((image) => ({ ...image, url: image.urls.small, preview: image.links.html }));
    return [...this.getState().results, ...parsedImages];
  }

  private checkIfIsLastPage = (totalPages: number, currentPage: number) => totalPages <= currentPage;
}
