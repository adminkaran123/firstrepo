import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin-layout/admin-layout.component.css']
})
export class AdminComponent implements OnInit {
  title = "Dashboard";

  constructor() { }

  ngOnInit() {
  }

}
