import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login/login.service";
import { GLOBAL } from "../../services/global";
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

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
  
  }

}
