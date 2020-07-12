import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Products } from '../shared/prdocuts.interface';

@Component({
  selector: 'app-card-rectangle',
  templateUrl: './card-rectangle.component.html',
  styleUrls: ['./card-rectangle.component.scss'],
})
export class CardRectangleComponent implements OnInit {

  amount = 0;
  price_count = 0;
  total = 0;
  total_array = [];

  // tslint:disable-next-line:no-input-rename
  @Input('index') index: any;
  // tslint:disable-next-line:no-input-rename
  @Input('produtos') produtos: Products[];

  @Output()totalEvent = new EventEmitter();

  colors: {hex: string, name: string, transform: string, cx: number}[] = [
    {hex: '#ee4d6e', name: 'red', transform: 'translate(0)', cx: 10.5},
    {hex: '#ee4de3', name: 'rose', transform: 'translate(25)', cx: 11},
    {hex: '#46e1a2', name: 'green', transform: 'translate(51)', cx: 10.5},
    {hex: '#3c403e', name: 'black', transform: 'translate(76)', cx: 11},
    {hex: '#e8f96e', name: 'yellow', transform: 'translate(102)', cx: 10.5},
    {hex: '#f9af6e', name: 'organge', transform: 'translate(127)', cx: 11},
    {hex: '#6ee1f9', name: 'blue', transform: 'translate(153)', cx: 10.5}
  ];

  constructor() {

   
  }

  ngOnInit() {
    this.price_count = this.produtos.price;
    console.log('produtos', this.produtos);
  }

  decreaseOne(where){
    this.amount -= 1;
    this.price_count -= this.produtos.price;
    this.total -= this.price_count;
    console.log('amount ', this.amount);
    this.totalEvent.emit(this.total);
    console.log('card number',where);
    // total is equal to produtos[wehre].price* this.amount
  }

  increaseOne(where){
    this.amount += 1;
    this.price_count = this.amount * this.produtos.price;
    this.total += this.price_count;
    this.totalEvent.emit(this.total);
    this.total_array.push(this.price_count);
    this.total_array.reduce( (acc,curr)=>acc+curr)

    if (this.amount < 0){ this.amount = 0; }
    console.log('amount ', this.amount);
    console.log('card number',where)
    console.log(' Total',this.total_array)
  }

  pickUpColor(where,who){
    (document.querySelector('#'+this.colors[who].name) as HTMLStyleElement).style.stroke = '1px #303030';
    console.log('element colored is ',this.colors[who].name)
    console.log('produtos', this.produtos);
  }







}
