import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-volunteer',
  templateUrl: './edit-profile-volunteer.component.html',
  styleUrls: ['./edit-profile-volunteer.component.css']
})
export class EditProfileVolunteerComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit(): void {
  }

}
