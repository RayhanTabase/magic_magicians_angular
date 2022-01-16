import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'

import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteComponent } from './components/quote/quote.component';

// const appRoutes: Routes = [
//   {path: '', component:}
// ]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    NavbarComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
