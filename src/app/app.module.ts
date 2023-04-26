import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FormStatusComponent } from './form-status/form-status.component';
import { ListingTableComponent } from './shared-component/listing-table/listing-table.component';
import { ProductComponent } from './pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPaginationComponent } from './shared-component/pagination/custom-pagination/custom-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchersComponent,
    FormComponent,
    FormStatusComponent,
    ListingTableComponent,
    ProductComponent,
    CustomPaginationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
