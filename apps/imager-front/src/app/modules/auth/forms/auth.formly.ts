import { AuthModel } from '../models/auth.model';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormlyEmailValidator } from '@imager/lib-formly';
import { FormlyBuilder, FormlyForm } from '@imager/lib-formly';
import { INPUT_TYPE } from '@imager/lib-formly';

const options: FormlyFormOptions = {
  formState: {
    awesomeIsForced: false,
  },
};

const model: AuthModel = {
  email: '',
  password: '',
};

const emailField = FormlyBuilder.field(
  'email',
  INPUT_TYPE,
  {
    label: 'AUTH.EMAIL',
    placeholder: 'Email',
    minLength: 3,
  },
  { validators: { validation: [FormlyEmailValidator] } },
  'col-12',
);

const passwordField = FormlyBuilder.field(
  'password',
  'input',
  {
    label: 'AUTH.PASSWORD',
    placeholder: 'Password',
    minLength: 3,
  },
  { validators: { validation: [FormlyEmailValidator] } },
  'col-12',
);

const row = FormlyBuilder.row([emailField, passwordField]);

export const AuthForm: FormlyForm<AuthModel> = FormlyBuilder.build<AuthModel>([row], options, model)();
