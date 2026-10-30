import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropout-list-component/product-dropout-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListAdvancedComponent } from './product-list-advanced-component/product-list-advanced-component';
import { ProductListSearchComponent } from './product-list-search-component/product-list-search-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';
import { Contact } from './contact/contact';
import { GroupCustomersComponent } from './group-customers/group-customers';
import { HomeWorkComponent } from './homeworkcomponent/homeworkcomponent';

import { CourseRegistrationComponent } from './course-registration-component/course-registration-component';
// 👉 THÊM DÒNG NÀY ĐỂ HẾT BÁO ĐỎ authGuard (kiểm tra lại thư mục lưu file auth.guard của bạn)
import { authGuard } from './classes/auth.guard'; 
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

const routes: Routes = [
  { path: '', component: HomeWorkComponent },
  { path: 'group-customers', component: GroupCustomersComponent },
  { path: 'binding-property', component: BindingPropertyComponent },
  { path: 'binding-class', component: BindingClassComponent },
  { path: 'binding-event', component: BindingEventComponent },
  { path: 'binding-two-way', component: BindingTwoWayComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-dropdown-list', component: ProductDropdownListComponent },
  { path: 'product-list-call-service', component: ProductListCallServiceComponent },
  { path: 'product-list-call-http-service', component: ProductListCallHttpServiceComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductListAdvancedComponent },
  { path: 'search-product', component: ProductListSearchComponent },
  {path: 'fakeproducts', component: FakeProductComponent},
  {path:"book-list",component:BooksComponent},
  {path:"book-detail",component:BookDetailComponent},
  { path: "book-new", component: BookNewComponent },
  {
    path: 'samplenested',
    component: ProductListAdvancedComponent,
    children: [
      { path: 'search', component: ProductListSearchComponent },
      { path: 'detail/:id', component: ProductDetailComponent }
    ]
  },
  {
    path: 'lazyinfor',
    loadComponent: () => import('./lazy-component/lazy-component').then(c => c.LazyComponent), // 👉 Đã thêm dấu phẩy ở đây
    canActivate: [authGuard]
  },
  { path: 'contact', component: Contact },
  { path: 'course-register', component: CourseRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path : 'course-reactive-register', component: CourseRegistrationReactiveComponent },
  { path: "book-update",component: BookUpdateComponent},
  {path : "book-delete", component: BookDeleteComponent},
  {path: "fashion-list",component : FashionComponent},
  { path: "fashion-detail", component: FashionDetailComponent},
  {path:"fashion-new",component: FashionNewComponent},
  {path: "fashion-update", component: FashionUpdateComponent},
  {path: "fashion-search", component: SearchFashionComponent},
  {path: "fashion-delete", component: FashionDeleteComponent},
    { path: "fashion/:slug", component: FashionSlugComponent },
  // Route 404 để duy nhất 1 lần ở cuối cùng
  { path: '**', component: PageNotFoundComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }