import { Component, OnInit } from '@angular/core';
import { Products } from '../shared/prdocuts.interface';
@Component({
  selector: 'app-card-square',
  templateUrl: './card-square.component.html',
  styleUrls: ['./card-square.component.scss'],
})
export class CardSquareComponent implements OnInit {
   amount = 0;
   produtos: Products;
   colors: {hex: string, name: string, transform: string}[] = [
     {hex: '#ee4d6e', name: 'red', transform: 'translate(0 0.032)'},
     {hex: '#ee4de3', name: 'rose', transform: 'translate(27 0.032)'},
     {hex: '#46e1a2', name: 'green', transform: 'translate(54 0.032)'},
     {hex: '#3c403e', name: 'black', transform: 'translate(81 0.032)'},
     {hex: '#e8f96e', name: 'yellow', transform: 'translate(108 0.032)'},
     {hex: '#f9af6e', name: 'organge', transform: 'translate(135 0.032)'},
     {hex: '#6ee1f9', name: 'blue', transform: 'translate(162 0.032)'}
   ];
  constructor() { }

  ngOnInit() {}

  

}
