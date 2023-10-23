import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CorrectoPage implements OnInit {
  public usuario!: Usuario;
  
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
  public regresarLogin(): void {
    this.router.navigate(['/ingresar']);
  }
}
