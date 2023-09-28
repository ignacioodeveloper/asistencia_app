import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Asegúrate de tener esta importación

import { MisDatosComponent } from './mis-datos.component';

@NgModule({
  declarations: [MisDatosComponent],
  imports: [
    CommonModule,
    IonicModule, // Agrega el módulo de IonicModule aquí
  ],
  exports: [MisDatosComponent],
})
export class MisDatosComponentModule {}
