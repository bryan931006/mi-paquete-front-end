
import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './services/global';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'app';
  public identity;
  public token;
  public url: string;
 // public variable;
  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.identity = this._loginService.getIdentity();
    this.token = this._loginService.getToken();
    this.url = GLOBAL.url;

  }

  ngOnInit() {

    this.identity = this._loginService.getIdentity();
    if (this.identity == null) {

      document.getElementById('but-log-out').style.visibility = "hidden";
    }
  }


  logout() {
    //this._loginService.logout();

    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    //ocultar el boton de cerrar sesion 
    document.getElementById('but-log-out').style.visibility = "hidden";
    //para que el cerrar la sesion se vaya a la ruta por defecto 
    this._router.navigate(['/login']);
  }




}
