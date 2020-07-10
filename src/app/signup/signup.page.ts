import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngSubmit(form: NgForm){
    this.userService.user = {
      name: form.value.username,
      telefone: form.value.telefone,
      password: form.value.password,
      location: form.value.location

    };

    this.userService.signUp();
  }


}
