import { FormlyFieldConfig, FormlyFieldProps, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

export interface FormlyForm<M> {
  form: FormGroup;
  fields: FormlyFieldConfig[];
  model: M;
  options: FormlyFormOptions;
}

export class FormlyBuilder {
  private static defaultFieldConfig: FormlyFieldConfig = {
    fieldGroupClassName: 'row',
    className: 'col-12 col-md-4',
    props: {
      translate: true,
      required: false,
    },
  };

  static build<M>(fields: FormlyFieldConfig[], options: FormlyFormOptions, model: M): () => FormlyForm<M> {
    return () => ({
      form: new FormGroup({}),
      fields,
      options,
      model,
    });
  }

  static row(fieldGroup: FormlyFieldConfig[], fieldGroupClassName?: string): FormlyFieldConfig {
    return {
      fieldGroupClassName: fieldGroupClassName || this.defaultFieldConfig.fieldGroupClassName,
      fieldGroup,
    };
  }

  static field(
    key: string,
    type: string,
    props: FormlyFieldProps & { translate?: boolean },
    config: FormlyFieldConfig,
    className?: string,
    id?: string,
  ): FormlyFieldConfig {
    return {
      id,
      key,
      type,
      className: className || this.defaultFieldConfig.className,
      props: {
        ...props,
        translate: props.translate || this.defaultFieldConfig.props?.['translate'],
        required: props.required || this.defaultFieldConfig.props?.['required'],
      },
      ...config,
    };
  }
}
