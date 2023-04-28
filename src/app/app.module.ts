import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FormStatusComponent } from './form-status/form-status.component';
import { ListingTableComponent } from './shared-component/listing-table/listing-table.component';
import { ProductComponent } from './pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPaginationComponent } from './shared-component/pagination/custom-pagination/custom-pagination.component';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ProperCasePipe } from './_utils/pipes/propercase.pipe';
import { CPDefaultThemeDirective } from './_utils/directives/cp-default-theme.directive';
import { CPCustomThemeDirective } from './_utils/directives/cp-custom-theme.directive';

@NgModule({
  declarations: [
    AppComponent,
    MatchersComponent,
    FormComponent,
    FormStatusComponent,
    ListingTableComponent,
    ProductComponent,
    CustomPaginationComponent,
    LoginComponent,
    ProperCasePipe,      //Custom Directive
    CPDefaultThemeDirective,
    CPCustomThemeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot(), // Normal ToastrModule added
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      }),                      // Customized ToastrModule added
    NgxUiLoaderModule        //LoaderModule Added
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
