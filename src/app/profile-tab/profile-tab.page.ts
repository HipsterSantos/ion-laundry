import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile-tab.page.html',
  styleUrls: ['profile-tab.page.scss']
})
export class ProfileTabPage {
  user: User;
  edit = true;
  text = (this.edit) ? 'Edit' : 'Save';
  constructor(private userSerivce: UserService) {
    this.user = this.userSerivce.user;
  }
   canEdit(){
     this.edit = !this.edit;
     
   }
}
