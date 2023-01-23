import { APP_PATHS } from './router.config';
import { MenuItem } from '@imager/lib-components';

export const MAIN_MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    label: 'AUTH.LOGIN',
    path: APP_PATHS.AUTH,
    translate: true,
  },
  {
    id: 2,
    label: 'SEARCHER.SEARCH',
    path: `${APP_PATHS.PRIVATE}/${APP_PATHS.SEARCHER}`,
    translate: true,
  },
];
