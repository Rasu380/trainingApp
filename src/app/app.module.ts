import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule,Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { customerFeatureKey, customerReducer } from './customer/store/reducer/customer.reducer';
import { NGRXCustomerAddComponent} from './customer/customer-add/customer-add.component';
import {NGRXCustomerViewComponent} from './customer/customer-view/customer-view.component';
import { HelloWorldComponent } from './basics/hello-world/hello-world.component';
import { HighlightDirective } from './basics/highlight.directive';
import { ChildCustomerAddComponent } from './basics/child-customer-add/child-customer-add.component';
import { ChildCustomerViewComponent } from './basics/child-customer-view/child-customer-view.component';
import { ChildHooksComponent } from './basics/child-hooks/child-hooks.component';
import { TemplateDrivenFormComponent } from './basics/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './basics/reactive-form/reactive-form.component';

const appRoutes:Routes =[
  {path:'',title:'Home',component:HomeComponent},
  {path:'about',title:'About',component:AboutComponent},
  {path:'contact-us',title:'Contact-US',component:ContactUsComponent},
  {path:'post/:id',title:'Post',component:PostComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PostComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    CustomerReportComponent,
    NGRXCustomerAddComponent,
    NGRXCustomerViewComponent,
    HelloWorldComponent,
    HighlightDirective,
    ChildCustomerAddComponent,
    ChildCustomerViewComponent,
    ChildHooksComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature(customerFeatureKey, customerReducer)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
