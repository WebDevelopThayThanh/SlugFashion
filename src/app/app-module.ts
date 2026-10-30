import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contact } from './contact/contact';
import { HomeWorkComponent } from './homeworkcomponent/homeworkcomponent';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';

import { ProductDropdownListComponent } from './product-dropout-list-component/product-dropout-list-component';

import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { CatalogComponent } from './catalog/catalog';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListAdvancedComponent } from './product-list-advanced-component/product-list-advanced-component';
import { GroupCustomersComponent } from './group-customers/group-customers';
import { ProductListSearchComponent } from './product-list-search-component/product-list-search-component';
import { CourseRegistrationComponent } from './course-registration-component/course-registration-component';
import { LoginComponent } from './login-component/login-component';
import { CourseRegistrationReactiveComponent } from './course-registration-reactive-component/course-registration-reactive-component';
import { FakeProductComponent } from './fake-product-component/fake-product-component';
import { BooksComponent } from './books-component/books-component';
import { BookDetailComponent } from './book-detail-component/book-detail-component';
import { BookNewComponent } from './book-new-component/book-new-component';
import { BookUpdateComponent } from './book-update-component/book-update-component';
import { BookDeleteComponent } from './book-delete-component/book-delete-component';
import { FashionComponent } from './fashion-component/fashion-component';
import { SearchFashionComponent } from './search-fashion/search-fashion';
import { FashionDetailComponent } from './fashion-detail-component/fashion-detail-component';
import { FashionNewComponent } from './fashion-new-component/fashion-new-component';
import { FashionUpdateComponent } from './fashion-update-component/fashion-update-component';
import { FashionDeleteComponent } from './fashion-delete-component/fashion-delete-component';
import { FashionSlugComponent } from './fashion-slug-component/fashion-slug-component';

@NgModule({
  declarations: [
    App,
    Contact,
    HomeWorkComponent,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    ProductListComponent,
    ProductDropdownListComponent,
    ProductListCallServiceComponent,
    ProductListCallHttpServiceComponent,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    CatalogComponent,
    ProductHttpHandleErrorServiceComponent,
    ProductDetailComponent,
    ProductListAdvancedComponent,
    GroupCustomersComponent,
    ProductListSearchComponent,
    CourseRegistrationComponent,
    LoginComponent,
    CourseRegistrationReactiveComponent,
    FakeProductComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    FashionComponent,
    FashionDetailComponent,
    FashionNewComponent,
    FashionUpdateComponent,
    FashionDeleteComponent,
    FashionSlugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchFashionComponent,
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
