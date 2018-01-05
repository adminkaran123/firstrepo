import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { CodelibaryComponent } from './codelibary/codelibary.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { UserupdateComponent } from './admin/userupdate/userupdate.component';
import { AddProductComponent } from './admin/add-product/add-product.component'; 
import { CallbackComponent } from './callback/callback.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { CategeoryComponent } from './project/categeory/categeory.component';
//Authuenticon 
import { AuthGuardService as AuthGuard } from './auth.gurd';

const routes: Routes = [
  {path:"admin",component:AdminLayoutComponent,canActivate:[AuthGuard], children:[
  {path:"dashboard",component:AdminComponent},
  {path:"user",component:UserupdateComponent},
  {path:"products", component:AddProductComponent}
  
  
  ]},
  { path: 'callback', component: CallbackComponent },
  {path:'',component:DefaultLayoutComponent, children:[
    {path:"home",component:HomeComponent},
    {path:"projects",component:ProjectComponent},
    {path:"categeory/:id",component:CategeoryComponent},
    {path:"code-libary",component:CodelibaryComponent,},
    {path:"",component:HomeComponent,pathMatch:'full'}
    
    
  ]},
  
  
  
  
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
