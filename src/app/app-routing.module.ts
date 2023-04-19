import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from './front-end/front-end.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path:"",component:FrontEndComponent},
  {path:"product-page",component:ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
