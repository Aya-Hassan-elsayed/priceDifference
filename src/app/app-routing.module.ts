import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './compontent/login/login.component';
import { RegisterComponent } from './compontent/register/register.component';
import { HomeComponent } from './compontent/home/home.component';
import{NavbarComponent} from'./compontent/navbar/navbar.component';
import { ListsComponent } from './compontent/lists/lists.component';
import { ContentUsComponent } from './compontent/content-us/content-us.component';
import { InvalidCertifcateComponent } from './compontent/invalid-certifcate/invalid-certifcate.component';
import { ValidCertifcateComponent } from './compontent/valid-certifcate/valid-certifcate.component';
import { AllDataComponent } from './compontent/all-data/all-data.component';
import { PaginationComponent } from './compontent/pagination/pagination.component';







const routes: Routes=[
  {
    path:'login',
    component:LoginComponent

},
{
  path:'register',
  component:RegisterComponent

},
{
  path:'home',
  component:HomeComponent

},
{
  path:'home',
  component:HomeComponent

},
{
path:'navbar',
component:NavbarComponent
},
{
  path:'lists',
  component:ListsComponent
  },
  {
    path:'content-us',
    component:ContentUsComponent
    },

      {
      path:'invalid-certifcate',
      component:InvalidCertifcateComponent
      },
      {
        path:'valid-certifcate',
        component:ValidCertifcateComponent
        },
        {
          path:'all-data',
          component:AllDataComponent
          },
        
       
{
  path:'pagination',
  component:PaginationComponent
},

{
  path:'',redirectTo:'lists',pathMatch:'full'
},

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

