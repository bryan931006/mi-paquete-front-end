import { GLOBAL } from './../../services/global';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
 import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
 import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [LoginService]
})
export class MenuComponent implements OnInit {

  public toggleMenu: boolean = false;
  public classes_menu = {
    app: true,
    sidebar_open: false
  };
  public title = 'app';
  public identity;
  public token;
  public url: string;

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
    this._loginService.logout();

  }

  showMenu() {
    if (this.classes_menu.sidebar_open == true) {
      this.classes_menu.sidebar_open = false;
    } else {
      this.classes_menu.sidebar_open = true;
    }
  }

}
