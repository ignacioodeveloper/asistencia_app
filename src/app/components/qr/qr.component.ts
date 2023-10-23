import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class QrComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
