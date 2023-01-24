import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '@imager/lib-translation';

export enum LANGUAGE {
  EN = 'en',
  ES = 'es',
}

export const LANGUAGES = {
  ES: {
    locale: 'es-ES',
    i18n: LANGUAGE.ES,
  },
  EN: {
    locale: 'en-EN',
    i18n: LANGUAGE.EN,
  },
};

export const TRANSLATION_GLOBAL_CONFIG = {
  defaultLanguage: LANGUAGES.ES.i18n,
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};
