import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllItemsPage } from './all-items/all-items.page';

import { HomeSwipeCardPage } from './home-swipe-card.page';
import { CategoryItemsPage } from './category-items/category-items.page';
const routes: Routes = [
  {
    path: 'items',
    component: CategoryItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  

exports: [RouterModule],
})
export class HomeSwipeCardPageRoutingModule {}
