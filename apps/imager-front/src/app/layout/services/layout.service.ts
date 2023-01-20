import { Injectable } from '@angular/core';
import { BaseStore } from '@imager/lib-store';
import { initialState, LayoutState } from '../store/layout-store.config';
import { Observable } from 'rxjs';
import { SIDE_MENU_POSITIONS } from '@imager/lib-components';
import { THEMES } from '../store/layout-store.consts';

@Injectable({ providedIn: 'root' })
export class LayoutService extends BaseStore<LayoutState> {
  constructor() {
    super(initialState);
  }

  public get theme$(): Observable<THEMES> {
    return this.select<THEMES>(({ theme }) => theme);
  }

  public get sideMenuOpened$(): Observable<boolean> {
    return this.select<boolean>(({ sideMenuOpened }) => sideMenuOpened);
  }

  public get sideMenuPosition$(): Observable<SIDE_MENU_POSITIONS> {
    return this.select<SIDE_MENU_POSITIONS>(({ sideMenuPosition }) => sideMenuPosition);
  }

  public setTheme() {
    this.setState((previousState) => ({
      ...previousState,
      theme: previousState.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
    }));
  }

  public setSideMenuOpened() {
    this.setState((previousState) => ({ ...previousState, sideMenuOpened: !previousState.sideMenuOpened }));
  }
}
