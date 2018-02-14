import { RegistryService } from './../../services/registry/registry.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './../../services/global';
import { FormControl, Validators } from '@angular/forms';
import { User } from "../../models/user";
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
  providers: [RegistryService]
})
export class RegistryComponent implements OnInit {
  public tipo_usuario: string = 'ROLE_DELIVERY_COMPANY';
  public agregar: Boolean = false;
  public user: User;
  public user_register: User;
  public alertRegister;
  public url: string;

  constructor(
    private _router: Router,
    private _registryService: RegistryService) {

    this.url = GLOBAL.url;
    this.user_register = new User();

  }

  ngOnInit() {
    this.user_register = new User();
  }

  CambiarPantalla(tipo_usuario) {
    this.agregar = !this.agregar
    this.tipo_usuario = tipo_usuario;
    this.user_register = new User();
    this.alertRegister = '';
  }

  onSubmitRegister() {
    this.user_register.role = this.tipo_usuario;
    this._registryService.register(this.user_register).subscribe(
      response => {
        if (response.user) {

          if (!response.user._id) {
            this.alertRegister = 'error al registrarse';
          } else {
            this.alertRegister = 'El registro se ha realizado correctamente, identificate con ' + response.user.email;
            this.user_register = new User();
          }
        } else if (response.deliveryCompany) {

          if (!response.deliveryCompany._id) {
            this.alertRegister = 'error al registrarse';
          } else {
            this.alertRegister = 'El registro se ha realizado correctamente, identificate con ' + response.deliveryCompany.email;
            this.user_register = new User();
          }

        } else {
          this.alertRegister = response.message;
        }
      },
      error => {
        var erroMessage = <any>error;
        if (erroMessage != null) {
          var body = JSON.parse(error._body);
          this.alertRegister = body.message;
          console.log(error);
        }
      }
    );
  }
}
