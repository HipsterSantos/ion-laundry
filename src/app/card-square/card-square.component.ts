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
  constructor() { }

  ngOnInit() {}

}
