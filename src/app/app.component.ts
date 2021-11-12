// app.component.ts
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { GridFilterService } from './grid-filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filterValues = {};
  dataSource = new MatTableDataSource();
  gridFilter = new GridFilterService(this.dataSource);
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'status'];
  
  @ViewChild(MatSort) sort: MatSort;

  filterSelectObj = [];
  constructor(  ) {  }

  ngOnInit() {
    this.getRemoteData();
    this.dataSource.sort = this.sort;
  }

  // Get remote serve data using HTTP call
  getRemoteData() {

    const remoteDummyData = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "a",
        "phone": "1",
        "website": "hildegard.org",
        "status": "Active"
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "a",
        "phone": "1",
        "website": "anastasia.net",
        "status": "Blocked"
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "a",
        "phone": "2",
        "website": "ramiro.info",
        "status": "Blocked"
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "b",
        "phone": "2",
        "website": "kale.biz",
        "status": "Active"
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "b",
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "status": "Active"
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "status": "In-Active"
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "210.067.6132",
        "website": "elvis.io",
        "status": "Active"
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "status": "In-Active"
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "status": "In-Active"
      },
      {
        "id": null,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "status": "Active"
      }
    ];
    this.dataSource.data = remoteDummyData;

    this.filterSelectObj.filter((o) => {
      o.options = this.getUnique(remoteDummyData, o.columnProp);
    });
  }
}