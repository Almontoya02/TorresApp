import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ManagmentpageComponent } from './components/managmentpage/managmentpage.component';

const routes: Routes = [
  {
    path:"home",
    component: HomepageComponent,
  },
  {
    path:"managment",
    component: ManagmentpageComponent,
  },
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'**',pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
