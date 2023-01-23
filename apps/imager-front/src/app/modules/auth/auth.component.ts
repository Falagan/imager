import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthForm } from './forms/auth.formly';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'imager-front-auth',
  standalone: true,
  imports: [MatButtonModule, RouterLink, TranslateModule, FormlyModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  public formlyForm = AuthForm;
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/private']);
  }
}
