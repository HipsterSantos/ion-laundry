import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllItemsPageRoutingModule } from './all-items-routing.module';

import { AllItemsPage } from './all-items.page';
import { CardSquareComponent } from 'src/app/card-square/card-square.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllItemsPageRoutingModule
  ],
  declarations: [CardSquareComponent]
})
export class AllItemsPageModule {}
