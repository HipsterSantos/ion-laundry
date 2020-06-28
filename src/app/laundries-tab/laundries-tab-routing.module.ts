import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaundriesTabPage } from './laundries-tab.page';

const routes: Routes = [
  {
    path: '',
    component: LaundriesTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundriesTabPageRoutingModule {}
