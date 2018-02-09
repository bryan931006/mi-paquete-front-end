import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './../global';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Injectable()
export class LoginService {

  public url: string;
  public identity;
  public token;

  constructor(private _http: Http,private _router: Router) {
    this.url = GLOBAL.url;
  }
  signup(user_to_login, gethash = null) {
    if (gethash != null) {
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'login', params, { headers: headers })
      .map(res => res.json());
  }

  //metodo para consultar el local storage
  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != "undefined") {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  //metodo para consultar el ocal estoareg
  getToken() {
    let token = localStorage.getItem('token');
    if (token != "undefined") {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  
  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    //para que el cerrar la sesion se vaya a la ruta por defecto 
    this._router.navigate(['/']);
  }
}
