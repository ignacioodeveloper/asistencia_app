import { Routes } from '@angular/router';
import { ingresoGuard } from './guards/ingreso-guard.guard';
import { inicioGuard } from './guards/inicio-guard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingresar',
    pathMatch: 'full',
  },

  {
    path: 'ingresar',
    loadComponent: () => import('./pages/ingresar/ingresar.page').then( m => m.IngresarPage),
    canActivate: [ingresoGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage),
    canActivate: [inicioGuard]
  },
  {
    path: 'correcto',
    loadComponent: () => import('./pages/correcto/correcto.page').then( m => m.CorrectoPage)
  },
  {
    path: 'incorrecto',
    loadComponent: () => import('./pages/incorrecto/incorrecto.page').then( m => m.IncorrectoPage)
  },

  {
    path: 'correo',
    loadComponent: () => import('./pages/correo/correo.page').then( m => m.CorreoPage)
  },
  {
    path: 'pregunta',
    loadComponent: () => import('./pages/pregunta/pregunta.page').then( m => m.PreguntaPage)
  },

];
