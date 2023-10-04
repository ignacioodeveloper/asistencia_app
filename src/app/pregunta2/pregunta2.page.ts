import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
})
export class Pregunta2Page implements OnInit {

  public usuario!: Usuario;
  public respuesta: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,) { 

      this.activatedRoute.queryParams.subscribe(params => {
        const currentNavigation = this.router.getCurrentNavigation();
        if (currentNavigation && currentNavigation.extras.state) {
          this.usuario = currentNavigation.extras.state["usuario"];
        } else {
          this.router.navigate(['/pregunta2']);
        }
      });
    }

  ngOnInit() {
  }
  
  

  public validarRespuestaSecreta(): void | undefined{
    if (this.usuario && this.usuario.respuestaSecreta === this.respuesta) {
      
      // La propiedad this.usuario.respuestaSecreta solo se verifica si this.usuario está definido.
      alert('CORRECTO!!! TU CLAVE ES ' + this.usuario.password);
    } else {
      // alert('INCORRECTO!!!');
      this.router.navigate(['/incorrecto2']);
    }
  }

  public regresarCorreo(): void {
    this.router.navigate(['/correo']);
  }
}
