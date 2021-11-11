import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.css']
})
export class GridFilterComponent implements OnInit {
  
  selected: any[] = [];
  options: any[] = [];
  @Input() fieldName: string;
  @Input() data: any[];
  @Output() filterChange = new EventEmitter<{fieldName: string, selected: any}>()

  constructor() { }

  ngOnInit() {
    this.options = this.getUnique(this.data, this.fieldName);
  }
  
  // Get unique values from columns to build filter
  getUnique(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  filterChanged() {
    this.filterChange.emit({fieldName: this.fieldName, selected: this.selected});
  }

}