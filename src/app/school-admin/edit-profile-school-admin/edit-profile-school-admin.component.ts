import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-school-admin',
  templateUrl: './edit-profile-school-admin.component.html',
  styleUrls: ['./edit-profile-school-admin.component.css']
})
export class EditProfileSchoolAdminComponent implements OnInit {

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
