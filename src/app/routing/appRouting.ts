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
<<<<<<< HEAD
    { path: 'calculadora',  component: CalculatorComponent },
    
    
    
    
    

=======
    
 
>>>>>>> 500a46275e8045025f14ea1f44b370f97f4ede4f
];
    


export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
    
    