import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabPage } from './profile-tab.page';

import { ProfileTabPageRoutingModule } from './profile-tab-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileTabPage }]),
    ProfileTabPageRoutingModule,
  ],
  declarations: [ProfileTabPage]
})
export class ProfileTabPageModule {}
