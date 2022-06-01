import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from 'src/app/classes/usuario.model';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  public socketStatus = false;
  public usuario:Usuario;

  constructor(private socket:Socket,
              private router:Router) {
    this.cargarStorage();
    this.Checkstatus();

   }

     logoutWS(){
     this.usuario = null;
     localStorage.removeItem('usuario');

     const payload ={
       nombre:'sin-nombre'
     };

     this.emit('configurar-usuario',payload,()=>{});
     this.router.navigateByUrl('')
   }
  


  Checkstatus(){
    this.socket.on('connect',() =>{
     console.log('conectado al servidor');
     this.socketStatus = true;
     this.cargarStorage();
    });

    this.socket.on('disconnect',() =>{
      console.log('desconectado del al servidor');
      this.socketStatus = false;
     });

  }

  emit(evento:string, payload?:any,calback?:Function){
    console.log('emitiendo',evento);

  this.socket.emit(evento, payload, calback);

  }

 listen(evento:string){
  return this.socket.fromEvent(evento);
 }

 loginWS(nombre:string){

  return  new Promise<void>((resolve,reject)=>{
  this.emit('configurar-usuario',{nombre},res=>{

    this.usuario = new Usuario(nombre);
    this.guardarStorage();
    
    resolve(); 

    });

  });

}

guardarStorage(){
  localStorage.setItem('usuario',JSON.stringify(this.usuario));
}

cargarStorage(){

  if(localStorage.getItem('usuario')){
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.loginWS(this.usuario.nombre);
  }
}

getusuario(){
  return this.usuario;
}

}
