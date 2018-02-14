import { MenuComponent } from './../components/menu/menu.component';
import { NgModule } from '@angular/cli';
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
//componentes de paginas
import { HomeComponent } from '../components/home/home.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistryComponent } from '../components/registry/registry.component';
import { CalculatorComponent } from '../components/calculator/calculator.component';


const routes: Routes = [
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistryComponent },
    { path: 'calculadora', component: CalculatorComponent },
    {
        path: 'home', component: MenuComponent,
        children: [
            { path: '', component: HomeComponent }

        ]
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

