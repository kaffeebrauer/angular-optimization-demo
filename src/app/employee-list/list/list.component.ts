import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from '../../shared/list-generator.service';
import { List } from 'immutable';

@Component({
  selector: 'sd-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() data: List<EmployeeData>; //change employee array to immutable list
  @Output() remove = new EventEmitter<EmployeeData>();
}