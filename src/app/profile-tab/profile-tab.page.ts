import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile-tab.page.html',
  styleUrls: ['profile-tab.page.scss']
})
export class ProfileTabPage {
  edit = true;
  text = (this.edit) ? 'Edit' : 'Save';
  constructor() {}
   canEdit(){
     this.edit = !this.edit;
     
   }
}
