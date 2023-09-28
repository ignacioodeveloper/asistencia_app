import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
})
export class IncorrectoPage implements OnInit {


  ngOnInit() {
  }
  constructor(private router: Router) { }


  public regresarLogin(): void {
    this.router.navigate(['/ingreso']);
  }

}
