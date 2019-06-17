import { ListGenerator, EmployeeData } from './shared/list-generator.service';
import { Names, Surnames } from './shared/names';
import { Component, OnInit } from '@angular/core';
import { List } from 'immutable'; //import immutable.js

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'sd-app',
  template: `
    <sd-employee-list
      [data]="salesList"
      department="Sales"
      (add)="salesList = add(salesList, $event)"
      (remove)="salesList = remove(salesList, $event)"
    ></sd-employee-list>
    <sd-employee-list
      [data]="rndList"
      department="R&D"
      (add)="rndList = add(rndList, $event)"
      (remove)="rndList = remove(rndList, $event)"
    ></sd-employee-list>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  salesList: List<EmployeeData>;
  rndList: List<EmployeeData>;
  label: string;

  constructor(private generator: ListGenerator) { }

  ngOnInit() {
    //convert to immutable list from immutable.js
    this.salesList = List(this.generator.generate(Names, Surnames, NumRange, 150));
    //conver to immutable list from immutable.js
    this.rndList = List(this.generator.generate(Names, Surnames, NumRange, 150));

  }

  // list type is now immutable list rather than type-array, return List<EmployeeData> due to requirement to assign variable
  add(list: List<EmployeeData>, name: string): List<EmployeeData> {
    return list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  // list type is now immutable list rather than type-array, return List<EmployeeData> due to requirement to assign variable
  remove(list: List<EmployeeData>, node: EmployeeData) {
    return list.splice(list.indexOf(node), 1);
  }
}