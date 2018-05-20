import { EntryComponent } from './components/entry/entry.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: EntryComponent,
    data: { form: 'login' }
  },
  {
    path: 'signup',
    component: EntryComponent,
    data: { form: 'signup' }
  },
  {
    path: ':username/main',
    component: MainComponent,
  },
  {
    path: ':username/profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
