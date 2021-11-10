import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, 
  MatFormFieldModule, 
  MatTableModule,
  MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridFilterComponent } from './grid-filter/grid-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    GridFilterComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
