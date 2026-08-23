import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ListsComponent } from './compontent/lists/lists.component';
import { InvalidCertifcateComponent } from './compontent/invalid-certifcate/invalid-certifcate.component';
import { ValidCertifcateComponent } from './compontent/valid-certifcate/valid-certifcate.component';
import { AllDataComponent } from './compontent/all-data/all-data.component';








const routes: Routes=[


{
  path:'lists',
  component:ListsComponent
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
  path:'',redirectTo:'lists',pathMatch:'full'
},

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

