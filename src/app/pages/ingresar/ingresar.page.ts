import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
// router navigationextras
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IngresarPage implements OnInit {

  correo = 'atorres@duocuc.cl';
  password = '1234';

  constructor(
    private bd: DataBaseService,
    private authService: AuthService,
    private router: Router) { }

  async ngOnInit() {
    this.bd.crearUsuariosDePrueba().then(async () => {
      await this.bd.leerUsuarios();
    });
  }

  ingresar() {
    this.authService.login(this.correo, this.password);
  }

  public ingresarPaginaValidarCorreo(): void {
    this.router.navigate(['/correo']);
  }
}
