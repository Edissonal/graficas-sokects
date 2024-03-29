import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketsService } from '../services/websockets.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivate {

  constructor(public wsService:WebsocketsService,
              private router:Router) { }

 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{


    console.log(this.wsService.getusuario());

    if(this.wsService.getusuario()){
      return true;

    }
    else{
      this.router.navigateByUrl('/');
      return false;
    }
  }

}