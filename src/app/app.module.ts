import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';


import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteComponent } from './components/quote/quote.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'quote', component:QuoteComponent},
  {path: 'calculator', component:CalculatorComponent}
]

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
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
