import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Incorrecto2Page } from './incorrecto2.page';

const routes: Routes = [
  {
    path: '',
    component: Incorrecto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Incorrecto2PageRoutingModule {}
