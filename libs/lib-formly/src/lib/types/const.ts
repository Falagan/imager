import { TypeOption } from '@ngx-formly/core/lib/models';
import { FormlyInputType } from './input/formly-input.type';
import { FIELD_WRAPPER } from '../wrappers/const';

export const INPUT_TYPE = 'inputType';
export const FORMLY_TYPES: TypeOption[] = [{ name: INPUT_TYPE, component: FormlyInputType, wrappers: [FIELD_WRAPPER] }];
