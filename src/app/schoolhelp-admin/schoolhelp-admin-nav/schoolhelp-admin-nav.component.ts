import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolhelp-admin-nav',
  templateUrl: './schoolhelp-admin-nav.component.html',
  styleUrls: ['./schoolhelp-admin-nav.component.css']
})
export class SchoolhelpAdminNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
