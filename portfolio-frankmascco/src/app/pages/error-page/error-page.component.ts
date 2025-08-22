import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ContainerComponent, FadeInDirective } from '../../shared';

@Component({
  selector: 'app-error-page',
  imports: [TranslatePipe, ContainerComponent, FadeInDirective],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {
  constructor(private router: Router) { }

  public goHome(): void {
    this.router.navigate(['/']);
  }
}
