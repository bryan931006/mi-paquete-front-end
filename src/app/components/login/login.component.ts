
import { LoginService } from './../../services/login/login.service';
import { Http, Response, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './../../services/global';
import { FormControl, Validators } from '@angular/forms';

//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import {MatGridListModule} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  agregar: Boolean = false;

  public title = '';
  public user: User;
  public user_register: User;
  //propiedad que se almacena en el local storage
  public identity;
  //propiedad que se almacena en el local storage
  public token;
  public errorMessage;
  public alertRegister;
  public url: string;
  constructor(
    private _http: Http,
    private _loginService: LoginService,
    private _router: Router) {
    this.user = new User();
    this.user.role = 'ROLE_USER';
    this.url = GLOBAL.url;

  }

  ngOnInit() {
  }
  CambiarPantalla() {
    this.agregar = !this.agregar
  }


  public onSubmit() {
    //coneguir los datos del usuario 
    this._loginService.signup(this.user).subscribe(
      response => {
        let identity = response.user;
        this.identity = identity;

        if (!this.identity._id) {
          alert('El usuario no esta correctamente creado')
        } else {
          // crear elmento en el local estorage para tener al usuario en sesion
          localStorage.setItem('identity', JSON.stringify(identity));
          //conseguir el token para enviarelo a acada peticion http
          this._loginService.signup(this.user, 'true').subscribe(
            response => {
              let token = response.token;
              this.token = token;
              if (this.token.length <= 0) {
                alert('El token no se ha generado correctamente')
              } else {
                // crear elemento en el local estorage para tener token disponible
                localStorage.setItem('token', token);

                this.user = new User();
                this.user.role = 'ROLE_USER';
                this._router.navigate(['/calculadora']);
                //que aprezca el boton cerrar secion
                document.getElementById('but-log-out').style.visibility = "visible";
              
              }
            },
            error => {
              var erroMessage = <any>error;
              if (erroMessage != null) {
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;
                console.log(erroMessage);
              }
            }
          );
        }
      },
      error => {
        var erroMessage = <any>error;

        if (erroMessage != null) {
          var body = JSON.parse(error._body);
          this.errorMessage = body.message;
          console.log(erroMessage);
        }
      }
    );
  }





}
