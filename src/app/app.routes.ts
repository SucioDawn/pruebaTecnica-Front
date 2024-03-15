import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/contacto-soporte/contacto-soporte.component').then(
        (c) => c.ContactoSoporteComponent
      ),
  },
];
