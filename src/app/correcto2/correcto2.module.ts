import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Correcto2PageRoutingModule } from './correcto2-routing.module';

import { Correcto2Page } from './correcto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Correcto2PageRoutingModule
  ],
  declarations: [Correcto2Page]
})
export class Correcto2PageModule {}
