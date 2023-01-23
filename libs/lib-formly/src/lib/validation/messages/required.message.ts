import { FormlyFieldConfig } from '@ngx-formly/core';

export function RequiredMessage(error: unknown, field: FormlyFieldConfig) {
  return `"${field.name}" is required`;
}
