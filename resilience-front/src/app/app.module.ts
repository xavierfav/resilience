import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DataTableComponent } from './add-item/data-table/data-table.component';
import { SearchService } from './add-item/search.service';
import { AddCategoryComponent } from './add-item/add-category/add-category.component';

const appRoutes: Routes = [
  { path: 'add', component: AddItemComponent },
  { path: 'addCategory/:id', component: AddCategoryComponent},
  { path: 'display', component: DataTableComponent },
  { path: '', component: AddItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AddItemComponent,
    DataTableComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
