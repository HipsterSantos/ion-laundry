import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    canChange = false;
  constructor() {
  }
  onChange(){
    this.canChange = ! this.canChange;
    console.log(this.canChange);
  }

}
