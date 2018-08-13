import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';
import { FormsModule } from '@angular/forms';

import { SideNavComponent } from './sidenav/sidenav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CtHeaderComponent } from './ct-header/ct-header.component';
import { ExampleOutletComponent } from './example-outlet/example-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PageNotFoundComponent,
    CtHeaderComponent,
    ExampleOutletComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
