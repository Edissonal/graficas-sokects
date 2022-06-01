import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { WebsocketsService } from '../../services/websockets.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre='';

  constructor(public websocketsService:WebsocketsService,
              private router:Router) { }

  ngOnInit(): void {
  }

  ingresar(){
   this.websocketsService.loginWS(this.nombre)
   .then(()=>{
      this.router.navigateByUrl('/mensajes');
   })


    }

 

}
