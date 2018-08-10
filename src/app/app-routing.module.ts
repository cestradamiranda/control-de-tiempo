import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component' 


const appRoutes: Routes = [
 
    { path: '',   redirectTo: '/app-root', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes 
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
       
    ]
  })
  export class AppRoutingModule { }
  