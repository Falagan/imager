import { Injectable } from '@angular/core';
import { BaseStore } from '@imager/lib-store';
import { initialState, LayoutState } from './layout-store.config';
import { Observable } from 'rxjs';
import { THEMES } from './layout-store.consts';

@Injectable()
export class LayoutStore extends BaseStore<LayoutState> {
  constructor() {
    super(initialState);
  }

  public setTheme(theme: THEMES) {
    this.setState((previousState) => ({ ...previousState, theme }));
  }

  public get theme$(): Observable<THEMES> {
    return this.select<THEMES>(({ theme }) => theme);
  }
}
