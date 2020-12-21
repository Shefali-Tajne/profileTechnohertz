import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { HomePage } from './home.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule, MaterialModule, 
   

   // FormlyBootstrapModule
],
  exports: [RouterModule,MaterialModule,

   // FormlyBootstrapModule
]
})
export class HomePageRoutingModule {}
