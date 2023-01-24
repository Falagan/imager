import { ValidationMessageOption } from '@ngx-formly/core/lib/models';
import { RequiredMessage } from './messages/required.message';

export const REQUIRED = 'required';
export const FORMLY_VALIDATION_MESSAGES: ValidationMessageOption[] = [{ name: REQUIRED, message: RequiredMessage }];
