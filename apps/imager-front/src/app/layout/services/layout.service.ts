import { Injectable } from '@angular/core';
import { BaseStore } from '@imager/lib-store';
import { initialState, LayoutState } from '../store/layout-store.config';
import { Observable } from 'rxjs';
import { MenuItem, SIDE_MENU_POSITIONS } from '@imager/lib-components';
import { THEMES } from '../store/layout-store.consts';
import { LANGUAGE } from '../../configs/translation.config';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LayoutService extends BaseStore<LayoutState> {
  constructor(private translateService: TranslateService) {
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

  public get mainMenuItems$(): Observable<MenuItem[]> {
    return this.select<MenuItem[]>(({ mainMenuItems }) => mainMenuItems);
  }

  public get languages$() {
    return this.select<LANGUAGE[]>((state) => state.languages);
  }

  public get currentLanguage$(): Observable<LANGUAGE> {
    return this.select<LANGUAGE>((state) => state.currentLanguage);
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

  public setLanguage(language: LANGUAGE) {
    this.translateService.use(language);
    this.setState((previousState) => ({ ...previousState, currentLanguage: language }));
  }

  public setMainMenu(menuItems: MenuItem[]) {
    this.setState((previousState) => ({ ...previousState, mainMenuItems: menuItems }));
  }
}
