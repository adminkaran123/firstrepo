import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title ="Designer or Devloper";
  subtitle ="design and code the web";
  name= 'Karan';
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
