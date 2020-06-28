import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryItemsPageRoutingModule } from './category-items-routing.module';

import { CategoryItemsPage } from './category-items.page';
import { CardRectangleComponent } from 'src/app/card-rectangle/card-rectangle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryItemsPageRoutingModule
  ],
  declarations: [CardRectangleComponent]
})
export class CategoryItemsPageModule {}
