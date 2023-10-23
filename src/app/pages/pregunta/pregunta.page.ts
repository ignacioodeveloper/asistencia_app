import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PreguntaPage implements OnInit {


  public usuario!: Usuario;
  public respuestaSecreta: string = '';

  constructor(
    private bd: DataBaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

    )
  {


    this.activatedRoute.queryParams.subscribe(params => {
      const currentNavigation = this.router.getCurrentNavigation();
      if (currentNavigation && currentNavigation.extras.state) {
        this.usuario = currentNavigation.extras.state["usuario"];
      } else {
        this.router.navigate(['/ingresar']);
      }
    });
  }

  ngOnInit() {
  }

  public async validarRespuestaSecreta(): Promise<void> {
    const usuarioEncontrado = await this.bd.leerUsuarioRespuesta(this.respuestaSecreta)
    
    if(this.usuario.respuestaSecreta === this.respuestaSecreta) {
      const navigationExtras: NavigationExtras = {
          state: {
               usuario: usuarioEncontrado
            }};
          this.router.navigate(['/correcto'], navigationExtras);
      }


    else {
      this.router.navigate(['/incorrecto']);
      }


  }
  public regresarCorreo(): void {
    this.router.navigate(['/correo']);
  }



}



