import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage implements OnInit {
  public usuario: Usuario = new Usuario('', '', '', '', '');

  constructor(
    private navCtrl: NavController

    , private activeroute: ActivatedRoute
    , private router: Router
  ) { }

  ngOnInit() {
    this.usuario.password = '';
  }
  public regresarLogin(): void {
    this.router.navigate(['/ingreso']);
  }

}
