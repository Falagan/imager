import { LayoutService } from '../layout/services/layout.service';
import { LANGUAGE } from './translation.config';

export function LoadGlobalConfiguration(layoutService: LayoutService) {
  return async () => {
    layoutService.setLanguage(LANGUAGE.ES);
    // await layoutService.setMenus();
  };
}
