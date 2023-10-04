import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  
    public usuario: Usuario;
    
    constructor(private router: Router, private toastController: ToastController) {
      this.usuario = new Usuario('', '', '', '', '');
      this.usuario.correo = '';
      this.usuario.password = '';
    }

    public ngOnInit(): void {

      
      this.usuario.correo = 'atorres@duocuc.cl';
      this.usuario.password = '1234';
      //this.ingresar();
    }

   
    public ingresar(): void {

      if(!this.validarUsuario(this.usuario)) {
        return;
      }

      this.mostrarMensaje('Bienvenido ' + this.usuario.nombre);

      /*
        Se declara e instancia un objeto de la clase NavigationExtras, para poder pasarle
        parámetros a la página home. Al objeto json "state" se le asigna un objeto con
        nombre de clave "login" y el valor "this.login", de modo que
        le pase la cuenta de usuario y su password a la página home.

        Nótese que al enviar this.login, realmente se está enviando los valores que el usuario
        digitó en las cajas de input, pues gracias a la directiva [(ngModel)]="login.usuario",
        el programa sabe que hay una relación directa de unión entre el valor de la propiedad
        login.usuario y el valor del control gráfico que lleva este mismo nombre.
      */
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: this.usuario
        }
      };
      // Navegamos hacia el Home y enviamos la información extra
      this.router.navigate(['/home'], navigationExtras);
    }

    /*
      Usaremos validateModel para verificar que se cumplan las
      validaciones de los campos del formulario
    */
    public validarUsuario(usuario: Usuario): boolean {

      const usu = this.usuario.buscarUsuarioValido(
        this.usuario.correo, this.usuario.password);
        
     

      if (usu) {
        this.usuario = usu;
        return true;
      }
      else {
        this.mostrarMensaje('La información de inicio de sesión es incorrecta.');
        return false;
      }
    }

    /**
     * Muestra un toast al usuario
     *
     * @param mensaje Mensaje a presentar al usuario
     * @param duracion Duración el toast, este es opcional
     */
    async mostrarMensaje(mensaje: string, duracion?: number) {
      const toast = await this.toastController.create({
          message: mensaje,
          duration: duracion? duracion: 2000
        });
      toast.present();
    }

    public ingresarPaginaValidarCorreo(): void {
      this.router.navigate(['/correo']);
    }

}
