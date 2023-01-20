import { THEMES } from './layout-store.consts';
import { SIDE_MENU_POSITIONS } from '@imager/lib-components';

export interface LayoutState {
  theme: THEMES;
  sideMenuOpened: boolean;
  sideMenuPosition: SIDE_MENU_POSITIONS;
}

export const initialState: LayoutState = {
  theme: THEMES.LIGHT,
  sideMenuOpened: false,
  sideMenuPosition: SIDE_MENU_POSITIONS.START,
};
