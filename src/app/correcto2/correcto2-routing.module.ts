import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Correcto2Page } from './correcto2.page';

const routes: Routes = [
  {
    path: '',
    component: Correcto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Correcto2PageRoutingModule {}
