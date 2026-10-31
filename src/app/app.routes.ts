import { Routes } from '@angular/router';
import { NosotrosComponent } from './paginas/nosotros/nosotros';
import { ServiciosComponent } from './paginas/servicios/servicios';

export const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '', redirectTo: '/nosotros', pathMatch: 'full' }
];