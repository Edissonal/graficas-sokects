import { Injectable } from '@angular/core';
import { WebsocketsService } from './websockets.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public wsServices:WebsocketsService) { 
  }

  sendMessage(mensaje:string){
    const payload={
          de:this.wsServices.getusuario().nombre,
          cuerpo:mensaje
}
  
 this.wsServices.emit('mensaje',payload);
  }


  getMessage(){
     return this.wsServices.listen('mensaje-nuevo');
  }

  getMessagesPrivate(){
    return this.wsServices.listen('mensaje-privado');
  }

  getUsuariosActivos(){
    return this.wsServices.listen('usuarios-activos');
  }

  emitirUsuariosActivos(){
    this.wsServices.emit('obtener-usuarios');
  }
  
}
