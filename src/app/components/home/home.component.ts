import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login/login.service';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './../../services/global';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {

  public identity;
  public token;
  public url: string;

  constructor(

    private _loginService: LoginService,
    
  ) { 
    this.identity = this._loginService.getIdentity();
    this.token = this._loginService.getToken();
    this.url = GLOBAL.url;

  }

  ngOnInit() {
    console.log("identidad ");
    console.log(this.identity );
  }

}
