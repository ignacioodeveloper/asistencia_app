import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  public usuario!: Usuario;
  public respuesta: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

    )
  {


    this.activatedRoute.queryParams.subscribe(params => {
      const currentNavigation = this.router.getCurrentNavigation();
      if (currentNavigation && currentNavigation.extras.state) {
        this.usuario = currentNavigation.extras.state["usuario"];
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

  public validarRespuestaSecreta(): void {
    if (this.usuario.respuestaSecreta === this.respuesta) {
      alert('CORRECTO!!! TU CLAVE ES ' + this.usuario.password);
    }
    else {
      alert('INCORRECTO!!!');
    }
  }

  public regresarCorreo(): void {
    this.router.navigate(['/correo']);
  }


}
