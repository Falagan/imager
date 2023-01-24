import { LayoutService } from '../layout/services/layout.service';
import { LANGUAGE } from './translation.config';
import { MAIN_MENU_ITEMS } from './app-menu.config';

export function LoadGlobalConfiguration(layoutService: LayoutService) {
  return async () => {
    layoutService.setLanguage(LANGUAGE.ES);
    layoutService.setMainMenu(MAIN_MENU_ITEMS);
  };
}

export const NX_UNSPLASH_API_URL = 'NX_UNSPLASH_API_URL';
export const NX_UNSPLASH_API_KEY = 'NX_UNSPLASH_API_KEY';
