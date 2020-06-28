import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaundriesTabPage } from './laundries-tab.page';

import { LaundriesTabPageRoutingModule } from './laundries-tab-routing.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
@NgModule({
  imports: [
  
  IonicModule,
    CommonModule,
    FormsModule,
    LaundriesTabPageRoutingModule 
  ],
  declarations: [LaundriesTabPage, ToolbarComponent]
})
export class LaundriesTabPageModule {}
