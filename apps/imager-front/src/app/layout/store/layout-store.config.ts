import { THEMES } from './layout-store.consts';
import { MenuItem, SIDE_MENU_POSITIONS } from '@imager/lib-components';
import { LANGUAGE } from '../../configs/translation.config';

export interface LayoutState {
  theme: THEMES;
  sideMenuOpened: boolean;
  sideMenuPosition: SIDE_MENU_POSITIONS;
  currentLanguage: LANGUAGE;
  languages: LANGUAGE[];
  mainMenuItems: MenuItem[];
}

export const initialState: LayoutState = {
  theme: THEMES.LIGHT,
  sideMenuOpened: false,
  sideMenuPosition: SIDE_MENU_POSITIONS.START,
  currentLanguage: LANGUAGE.ES,
  languages: Object.values(LANGUAGE) as LANGUAGE[],
  mainMenuItems: [],
};
