import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-nav',
  templateUrl: './volunteer-nav.component.html',
  styleUrls: ['./volunteer-nav.component.css']
})
export class VolunteerNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
