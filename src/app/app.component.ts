import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <router-outlet />
    </app-layout>
  `
})
export class AppComponent {
  title = 'Contacto de soporte';
}
