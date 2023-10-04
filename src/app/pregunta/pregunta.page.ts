import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
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
        this.router.navigate(['/pregunta']);
      }
    });
  }

  ngOnInit() {
    this.usuario;
  }

  //   public validarRespuestaSecreta1(): void {
  //     if (this.usuario.respuestaSecreta === this.usuario) {
  //       /this.router.navigate(['/correcto']);

  //       alert('CORRECTO!!! TU CLAVE ES ' + this.usuario.password);
  //     }
  //     else {
  //       alert('INCORRECTO!!!');
  //       this.router.navigate(['/incorrecto']);

  //     }
  //   }

  // public validarRespuestaSecreta(): void | undefined{debugger
  //   if (this.usuario !==null && this.usuario.respuestaSecreta === this.respuesta) {
      
  //     // La propiedad this.usuario.respuestaSecreta solo se verifica si this.usuario está definido.
  //     alert('CORRECTO!!! TU CLAVE ES ' + this.respuesta);
  //   } else {
  //     // alert('INCORRECTO!!!');
  //     this.router.navigate(['/incorrecto2']);
  //   }
  // }

  public validarRespuestaSecreta1(): void | undefined{
    if (this.respuesta && this.usuario.respuestaSecreta === this.respuesta) {
      // La propiedad this.usuario.respuestaSecreta solo se verifica si this.usuario está definido.
      alert('CORRECTO!!! TU CLAVE ES ' + this.usuario.password);
    } else {
      this.router.navigate(['/correcto']);
    }
  }
  

  public regresarCorreo(): void {
    this.router.navigate(['/incorrecto']);
  }


}
