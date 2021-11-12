import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Injectable()
export class GridFilterService {
  filterValues = {};

  constructor(private dataSource: MatTableDataSource<any>) {
    dataSource.filterPredicate = this.createFilter();
  }

  createFilter() {
    const filterFunction = function (data: any, filter: string): boolean {
        const searchTerms = JSON.parse(filter);

        const search = () => {
            const rowMatch = [];
            for (const col in searchTerms) {
                if (searchTerms.hasOwnProperty(col)) {
                    const columnMatch = [];
                    searchTerms[col].forEach(option => {
                        columnMatch.push(data[col] === option);
                    });
                    rowMatch.push(columnMatch.some(Boolean));
                }
            }
            return rowMatch.every(Boolean);
            // use .some(Boolean) to use an OR filter
        };
        return search();
    };
    return filterFunction;
}

  filterChange(fieldName: string, selected) {
      if (selected.length > 0) {
          this.filterValues[fieldName] = selected;
      } else {
          delete this.filterValues[fieldName];
      }
      this.dataSource.filter = JSON.stringify(this.filterValues);
  }  
  
  // Get unique values from columns to build filter
  getUnique(fullObj, key: string) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk.sort();
  }

  getOptions(fieldName: string) {
    return this.getUnique(this.dataSource.data, fieldName);
  }
}