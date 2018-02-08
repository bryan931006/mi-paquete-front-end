import { Component, OnInit } from '@angular/core';

//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import {MatGridListModule} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  agregar: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  CambiarPantalla() {
    this.agregar = !this.agregar
  }
}
