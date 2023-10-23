import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CorreoPage implements OnInit {

  correo: string ='';

  constructor(
    private router: Router,
    private bd: DataBaseService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  public async  ingresarPaginaValidarRespuestaSecreta():  Promise<void> {
      // buscar el user por correo
      const usuarioEncontrado =  await  this.bd.leerUsuario(this.correo);
      if(!usuarioEncontrado) {
      this.router.navigate(['/incorrecto']);
      }

      else {
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: usuarioEncontrado
          }
        };
        this.router.navigate(['/pregunta'],navigationExtras)
      }
  }
  
  public regresarLogin(): void {
    this.router.navigate(['/ingresar']);
  }

}

