import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainTabPage } from './main-tab.page';
import { HomeCardComponent } from '../home-card/home-card.component';
import { MainTabPageRoutingModule } from './main-tab-routing.module';
import { HomeSwipeCardPageModule } from '../home-swipe-card/home-swipe-card.module';
import { HomeSwipeCardPage } from '../home-swipe-card/home-swipe-card.page';

@NgModule({
  imports: [
 
IonicModule,
    CommonModule,
    FormsModule,
    MainTabPageRoutingModule,
    HomeSwipeCardPageModule
  ],
  declarations: [MainTabPage, HomeCardComponent]
})
export class MainTabPageModule {}
