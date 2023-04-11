import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbholungCompnent } from './components/nav-items/abholung/abholung.component';
import { UbergabeComponent } from './components/nav-items/geschaeftsstelle-übergabe/geschaeftsstelle-ubergabe.component';

const routes: Routes = 
[
  {path:'ubergabe', component: UbergabeComponent},
  {path:'abholung', component: AbholungCompnent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
