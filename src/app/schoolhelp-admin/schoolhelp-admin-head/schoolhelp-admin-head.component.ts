import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-schoolhelp-admin-head',
  templateUrl: './schoolhelp-admin-head.component.html',
  styleUrls: ['./schoolhelp-admin-head.component.css']
})
export class SchoolhelpAdminHeadComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor() {}
   
  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
