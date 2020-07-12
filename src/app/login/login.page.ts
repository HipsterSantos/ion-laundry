import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('telefone', {static: true}) telefone: ElementRef;
  @ViewChild('senha', {static: true}) senha: ElementRef;
 removeClass = false;

  constructor(private userService: UserService) { 

  }

  ngOnInit() {
  }
  
  ngSubmit(form: NgForm){
    this.userService.user = {
      telefone: form.value.telefone,
      password: form.value.password
    };
     
     this.userService.login();
  }
}
