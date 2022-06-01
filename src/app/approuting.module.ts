import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuarioGuardService } from './guards/usuario-guard.service';




const  appRoutes:Routes = [
  {path:'',component:LoginComponent},
  {path:'mensajes',
   component:MensajesComponent,
   canActivate:[UsuarioGuardService]},
  {path:'**',component:LoginComponent},
];


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(appRoutes)
  ],exports:[
    RouterModule
  ]
})
export class ApproutingModule { }
