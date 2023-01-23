import { ConfigOption } from '@ngx-formly/core/lib/models/config';
import { FORMLY_TYPES, FORMLY_VALIDATION_MESSAGES, FORMLY_WRAPPERS } from '@imager/lib-formly';

export const FORMLY_GLOBAL_CONFIG: ConfigOption = {
  types: FORMLY_TYPES,
  wrappers: FORMLY_WRAPPERS,
  validationMessages: FORMLY_VALIDATION_MESSAGES,
  extras: { checkExpressionOn: 'modelChange', immutable: true, lazyRender: true },
};
