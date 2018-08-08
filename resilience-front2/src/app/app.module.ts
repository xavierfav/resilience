import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DataTableComponent } from './add-item/data-table/data-table.component';
import { AddItemService } from './add-item/accordion-form/add-item.service';
import { AddCategoryComponent } from './add-item/add-category/add-category.component';
import { CategoryComponent } from './add-item/data-table/category/category.component';
import { DataTableService } from './add-item/data-table/data-table.service';
import { ReferencesData } from './shared/references-data';
import { AccordionFormComponent } from './add-item/accordion-form/accordion-form.component';
import { PanelComponent } from './add-item/panel/panel.component';


const appRoutes: Routes = [
  { path: 'addReference', component: AddItemComponent,
   children: [ { path: 'addReference/:id', component: AccordionFormComponent },
               { path: 'referenceName/:id', component: PanelComponent }
             ] 
  },
  { path: 'addCategory/:id', component: AddCategoryComponent },
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
    AddCategoryComponent,
    CategoryComponent,
    AccordionFormComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ReferencesData, { dataEncapsulation: false }),
    NgbModule.forRoot()
  ],
  providers: [ 
    AddItemService,
    CookieService,
    DataTableService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
