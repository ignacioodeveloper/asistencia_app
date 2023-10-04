import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Incorrecto2PageRoutingModule } from './incorrecto2-routing.module';

import { Incorrecto2Page } from './incorrecto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Incorrecto2PageRoutingModule
  ],
  declarations: [Incorrecto2Page]
})
export class Incorrecto2PageModule {}
