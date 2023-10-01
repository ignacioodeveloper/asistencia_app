import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'miclase',
    loadChildren: () => import('../miclase/miclase.module').then(m => m.MiclasePageModule)
  },
  {
    path:'CerrarSesion',
    loadChildren: () => import('../ingreso/ingreso.module').then(m => m.IngresoPageModule)
  }

  // CerrarSesion
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
