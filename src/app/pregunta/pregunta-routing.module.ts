import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntaPage } from './pregunta.page';
import { Usuario } from '../model/usuario';

const routes: Routes = [
  {
    path: '',
    component: PreguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class PreguntaPageRoutingModule {}
