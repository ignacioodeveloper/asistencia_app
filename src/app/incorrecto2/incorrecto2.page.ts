import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-incorrecto2',
  templateUrl: './incorrecto2.page.html',
  styleUrls: ['./incorrecto2.page.scss'],
})
export class Incorrecto2Page implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public OlviContra1(): void {
    this.router.navigate(['/pregunta']);
  }

}
