import {Component,  OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Protfolio';
  name:string;
  
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

   ngOnInit(){
    //$('body').scrollspy({target: "#nav", offset:1});   
  }
  
  
}

export interface IProduct {
  ProductID: number;
  ProductName: string;
}
