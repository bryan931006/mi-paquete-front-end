import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  agregar: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  CambiarPantalla() {
    this.agregar = !this.agregar
  }
}
