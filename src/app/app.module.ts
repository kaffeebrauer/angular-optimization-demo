import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { EmployeeListModule } from './employee-list/employee-list.module';

import { ListGenerator } from './shared/list-generator.service';

@NgModule({
  imports: [BrowserModule, EmployeeListModule],
  providers: [ListGenerator],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
