import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AdditemformComponent } from './additemform/additemform.component';
import { BudgetitemlistComponent } from './budgetitemlist/budgetitemlist.component';
import { BudgetitemcardComponent } from './budgetitemlist/budgetitemcard/budgetitemcard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AdditemformComponent,
    BudgetitemlistComponent,
    BudgetitemcardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
