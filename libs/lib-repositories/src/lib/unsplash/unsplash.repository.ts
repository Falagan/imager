import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTES } from './models/unsplash-api.routes';
import { SearchParams } from './models/unsplash-search-params.model';
import { ApiResponsePaginated } from './models/api-response-paginated.model';
import { UnSplashPhoto } from './models/unsplash-photo.model';
import { UNSPLASH_API_KEY, UNSPLASH_API_URL } from './models/consts';

@Injectable({
  providedIn: 'root',
})
export class UnSplashRepository {
  constructor(
    private httpClient: HttpClient,
    @Inject(UNSPLASH_API_URL) private unSplashApiUrl: string,
    @Inject(UNSPLASH_API_KEY) private unSplashApiKey: string,
  ) {}

  /** Gets pictures by text match search*/
  findPicturesByText(params: SearchParams): Observable<ApiResponsePaginated<UnSplashPhoto>> {
    const { text, order_by, per_page, page } = params;
    return this.httpClient.get<ApiResponsePaginated<UnSplashPhoto>>(
      `${this.unSplashApiUrl}/${API_ROUTES.SEARCH_PRE}/${API_ROUTES.SEARCH_PHOTOS}?client_id=${this.unSplashApiKey}&query=${text}&order_by=${order_by}&per_page=${per_page}&page=${page}`,
    );
  }
}
