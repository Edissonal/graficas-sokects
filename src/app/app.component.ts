import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from './services/websockets.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sockets-front';
    constructor(public wsService:WebsocketsService,
                public chatService:ChatService ){}

    ngOnInit(): void {

      this.chatService.getMessagesPrivate().subscribe(msg =>{

        console.log(msg);
      });
  
    }
}
