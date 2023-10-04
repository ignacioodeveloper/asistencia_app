import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correcto2',
  templateUrl: './correcto2.page.html',
  styleUrls: ['./correcto2.page.scss'],
})
export class Correcto2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public correo1(): void {
    this.router.navigate(['/pregunta']);
  }
}
