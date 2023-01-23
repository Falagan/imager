import { LayoutService } from '../layout/services/layout.service';

import { LANGUAGE } from './translation.config';

export function LoadGlobalConfiguration(layoutService: LayoutService) {
  return async () => {
    layoutService.setLanguage(LANGUAGE.ES);
    // await layoutService.setMenus();
  };
}

export const NX_UNSPLASH_API_URL = 'NX_UNSPLASH_API_URL';
export const NX_UNSPLASH_API_KEY = 'NX_UNSPLASH_API_KEY';
