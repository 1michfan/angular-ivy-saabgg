import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.css']
})
export class GridFilterComponent implements OnInit {
  
  selected: any[] = [];
  @Input() options: any[] = [];
  @Output() filterChange = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }

  filterChanged() {
    this.filterChange.emit(this.selected);
    console.log(this.selected);
  }

}