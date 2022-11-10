import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-admin-nav',
  templateUrl: './school-admin-nav.component.html',
  styleUrls: ['./school-admin-nav.component.css']
})
export class SchoolAdminNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
