import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'imager-formly-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormlyModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: ` <mat-form-field class="w-100">
    <mat-label>{{ label }}</mat-label>
    <input [formlyAttributes]="field" [type]="type" matInput [formControl]="formControl" [placeholder]="placeholder" />
    <button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value = ''">
      <mat-icon>close</mat-icon>
    </button>
    <mat-error *ngIf="showError">
      <formly-validation-message [field]="field"></formly-validation-message>
    </mat-error>
  </mat-form-field>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyInputType extends FieldType<FieldTypeConfig> {
  get type(): string {
    return this.props.type || 'text';
  }

  get placeholder(): string {
    return this.props.placeholder || '';
  }

  get label(): string {
    return this.props.label || '';
  }

  get value(): string {
    return this.formControl.value || '';
  }

  set value(value: string) {
    this.formControl.patchValue(value);
  }
}
