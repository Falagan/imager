import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'imager-front-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
