import { Component, OnInit, Input } from '@angular/core';
import { Servicos } from '../shared/services.interface';
import { Products } from '../shared/prdocuts.interface';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('services') services: Servicos[];
  // tslint:disable-next-line:no-input-rename
  @Input('index') index: any[];
  products: string[] = ['Caminsas', 'Calções', 'Cazacos', 'Vestidos', 'Calças'];
  
  constructor() { }

  ngOnInit() {}

}
