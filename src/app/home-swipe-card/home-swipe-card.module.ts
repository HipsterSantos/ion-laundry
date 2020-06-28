import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSwipeCardPageRoutingModule } from './home-swipe-card-routing.module';
import { AllItemsPage } from './all-items/all-items.page';
import { HomeSwipeCardPage } from './home-swipe-card.page';
import { CategoryItemsPage } from './category-items/category-items.page';
import { AllItemsPageModule } from './all-items/all-items.module';
import { CategoryItemsPageModule } from './category-items/category-items.module';
import { CardSquareComponent } from '../card-square/card-square.component';
import { CardRectangleComponent } from '../card-rectangle/card-rectangle.component';

@NgModule({
  imports: [


CommonModule,
    FormsModule,
    IonicModule,
    HomeSwipeCardPageRoutingModule,
  ],
  declarations: [ HomeSwipeCardPage, AllItemsPage, CategoryItemsPage, CardSquareComponent,CardRectangleComponent ],
  exports: [ HomeSwipeCardPage]
})
export class HomeSwipeCardPageModule {}
