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
            console.log(rowMatch);
            return rowMatch.every(Boolean);
            // use .some(Boolean) to use an OR filter
        };
        return search();
    };
    return filterFunction;
}

filterChange(event: any) {
    if (event.selected.length > 0) {
        this.filterValues[event.fieldName] = event.selected;
    } else {
        delete this.filterValues[event.fieldName];
    }
    this.dataSource.filter = JSON.stringify(this.filterValues);
}
}