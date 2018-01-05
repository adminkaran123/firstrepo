import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { Ng2UploaderModule } from 'ng2-uploader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header.component';
import { FooterComponent } from './template/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { CodelibaryComponent } from './codelibary/codelibary.component';
import { CodeComponent } from './codelibary/code/code.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { SidebarComponent } from './admin/includes/sidebar.component';
import { UserupdateComponent } from './admin/userupdate/userupdate.component';
import { AdminFooterComponent } from './admin/includes/admin-footer.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminHeaderComponent } from './admin/includes/admin-header.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {ProjectsService } from './projects.service';
import {AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuardService as AuthGuard } from './auth.gurd';
import { CategeoryComponent } from './project/categeory/categeory.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    CodelibaryComponent,
    CodeComponent,
    AdminComponent,
    DefaultLayoutComponent,
    AdminLayoutComponent,
    SidebarComponent,
    UserupdateComponent,
    AdminFooterComponent,
    AddProductComponent,
    CallbackComponent,
    AdminHeaderComponent,
    NotFoundComponent,
    CategeoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule ,
    Ng2UploaderModule   
    
  ],
  providers: [
    
    ProjectsService,
    AuthGuard,
    AuthService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
