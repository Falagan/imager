import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './formly-field.wrapper.html',
  standalone: true,
  imports: [CommonModule, FormlyModule],
  styleUrls: ['./formly-field.wrapper.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldWrapper extends FieldWrapper {}
