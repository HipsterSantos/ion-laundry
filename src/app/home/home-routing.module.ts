import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginPage } from '../login/login.page';
import { SplashScreenPage } from '../splash-screen/splash-screen.page';
import { SignupPage } from '../signup/signup.page';


const routes: Routes = [
  {
   path: '',
   component: HomePage,
   children: [
     {
        path: 'tab1',
        loadChildren: () => import('../main-tab/main-tab.module').then( m => m.MainTabPageModule)
     },
     {
       path: 'tab2',
       loadChildren: () => import('../laundries-tab/laundries-tab.module').then( m => m.LaundriesTabPageModule)
     },
     {
       path: 'tab3',
       loadChildren: () => import('../profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
     },
     {
       path: '',
       redirectTo: 'tab1',
       pathMatch: 'full'
     }
   ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomePageRoutingModule {}
