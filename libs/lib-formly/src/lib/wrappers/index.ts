import { WrapperOption } from '@ngx-formly/core/lib/models';
import { FormlyFieldWrapper } from './field/formy-field.wrapper';
import { FIELD_WRAPPER } from './const';

export const FORMLY_WRAPPERS: WrapperOption[] = [{ name: FIELD_WRAPPER, component: FormlyFieldWrapper }];
