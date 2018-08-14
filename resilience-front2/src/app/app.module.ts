import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DataTableComponent } from './add-item/data-table/data-table.component';
import { AddItemService } from './add-item/accordion-form/add-item.service';
import { AddCategoryComponent } from './add-item/accordion-form/add-category/add-category.component';
import { CategoryComponent } from './add-item/data-table/category/category.component';
import { DataTableService } from './add-item/data-table/data-table.service';
import { ReferencesData } from './shared/references-data';
import { AccordionFormComponent } from './add-item/accordion-form/accordion-form.component';
import { DeleteItemComponent } from './add-item/delete-item/delete-item.component';


const appRoutes: Routes = [
  { path: 'addReference', component: AddItemComponent,
   children: [ { path: 'addReference/:id', component: AccordionFormComponent }
             ] 
  },
  { path: 'addCategory/:id', component: AddCategoryComponent },
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
    DeleteItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ReferencesData, { dataEncapsulation: false }),
    NgbModule.forRoot(),
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ 
    AddItemService,
    CookieService,
    DataTableService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
