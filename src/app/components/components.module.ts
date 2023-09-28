import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule }  from '@ionic/angular';

import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { ForoComponent } from './foro/foro.component';
import { MiclaseComponent } from './miclase/miclase.component';
import { QrComponent } from './qr/qr.component';


@NgModule({
  declarations: [
    //aqui declaramos todos los componentes
    MisDatosComponent,
    ForoComponent,
    MiclaseComponent,
    QrComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    //aqui exportamos todos los componentes
    MisDatosComponent,
    MiclaseComponent,
    ForoComponent,
    QrComponent,
    FormsModule
  ]
})
export class ComponentsModule { }
