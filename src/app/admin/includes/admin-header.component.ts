import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
@Component({
  selector: 'admin-app-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['../admin-layout/admin-layout.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }


  ngOnInit() {
  }

}
