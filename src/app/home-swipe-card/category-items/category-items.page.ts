import { Component, OnInit } from '@angular/core';
import { Products } from '../../shared/prdocuts.interface';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.page.html',
  styleUrls: ['./category-items.page.scss'],
})
export class CategoryItemsPage implements OnInit {

  total = 0;
   products: Products[]  = [
    {name: 'Caminsa',
     imgurl: '../../assets/img/products/caminsa.png',
     price: 499.99
    },
    {name: 'Calças',
     imgurl: '../../assets/img/products/calcas.png',
     price: 839.99
    },
    {name: 'Calções',
     imgurl: '../../assets/img/products/calcoes.png',
     price: 344.99
    },
    {name: 'Cazaco',
     imgurl: '../../assets/img/products/cazaco.png',
     price: 999.99
    },
    {name: 'Caminsola',
     imgurl: '../../assets/img/products/caminsola.png',
     price: 459.89
    },
    {name: 'Terno',
     imgurl: '../../assets/img/products/terno.png',
     price: 1199.58
    },
    {name: 'Meias',
     imgurl: '../../assets/img/products/meias.png',
     price: 99.99
    },
    {name: 'Gravata',
     imgurl: '../../assets/img/products/gravata.png',
     price: 5000
    },
    {name: 'Toalha',
     imgurl: '../../assets/img/products/toalhas.png',
     price: 749.82
    },
  ];
  constructor() { 
    console.log(this.products)
  }

  ngOnInit() {
  }

}
