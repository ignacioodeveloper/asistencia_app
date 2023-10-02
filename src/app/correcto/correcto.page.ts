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

  public usuario!: Usuario;
  
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
  public regresarLogin(): void {
    this.router.navigate(['/ingreso']);
  }

}
