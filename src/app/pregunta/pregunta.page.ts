import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  public usuario!: Usuario;
  public respuestaSecreta: string = '';

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
    const usuario = new Usuario('', '', '', '', '');
    const usuarioEncontrado = usuario.buscarUsuarioPorRespuesta(this.respuestaSecreta);
    if (this.usuario.respuestaSecreta === this.respuestaSecreta) {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usuarioEncontrado
        }}
      this.router.navigate(['/correcto'], navigationExtras);

      // alert('CORRECTO!!! TU CLAVE ES ' + this.usuario.password);
    }
    else {
      // alert('INCORRECTO!!!');
      this.router.navigate(['/incorrecto']);

    }
  }

  public regresarCorreo(): void {
    this.router.navigate(['/correo']);
  }


}
