import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTabPage } from './main-tab.page';
import { CategoryItemsPage } from '../home-swipe-card/category-items/category-items.page';
import { HomeSwipeCardPage } from '../home-swipe-card/home-swipe-card.page';
import { AllItemsPage } from '../home-swipe-card/all-items/all-items.page';

const routes: Routes = [
  {
    path: '',
    component: MainTabPage,
    children: [
      {
        path:'',
        redirectTo:'items'
      },
      {
        path: 'items',
        component: CategoryItemsPage
      },
      {
        path: 'all',
        component: AllItemsPage,
        children:[
          {path: 'items', component: CategoryItemsPage}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainTabPageRoutingModule {}
