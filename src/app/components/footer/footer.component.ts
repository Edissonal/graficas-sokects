import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from '../../services/websockets.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public wsService:WebsocketsService) { }

  ngOnInit(): void {
   //  console.log("Prueba"+ this.wsService.socketStatus);
  }

}
