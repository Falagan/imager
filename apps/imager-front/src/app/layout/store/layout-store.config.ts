import { THEMES } from './layout-store.consts';

export interface LayoutState {
  theme: THEMES;
}

export const initialState: LayoutState = {
  theme: THEMES.LIGHT,
};
