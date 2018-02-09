import { NgModule }from '@angular/cli';
import { ModuleWithProviders } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
//componentes de paginas
import { HomeComponent}from '../components/home/home.component';
import{  AppComponent} from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistryComponent } from '../components/registry/registry.component';
import {CalculatorComponent} from '../components/calculator/calculator.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'registro',  component: RegistryComponent },
    { path: 'calculadora',  component: CalculatorComponent },
    
    
    
    
    

];
    



    export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
    
    