import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExampleOutletComponent } from './example-outlet/example-outlet.component'
import { AppComponent } from './app.component';

const appRoutes: Routes = [

  { path: 'app-root', component: AppComponent } ,
    { path: '',   redirectTo: 'app-root', pathMatch: 'full' },
    { path: 'example',   component: ExampleOutletComponent },
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
