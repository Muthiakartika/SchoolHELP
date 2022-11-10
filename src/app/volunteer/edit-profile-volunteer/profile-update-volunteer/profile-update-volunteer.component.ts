import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-update-volunteer',
  templateUrl: './profile-update-volunteer.component.html',
  styleUrls: ['./profile-update-volunteer.component.css']
})
export class ProfileUpdateVolunteerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result.toString();
      }
    }
  }
  public delete(){
    this.url = null;
  }

}
