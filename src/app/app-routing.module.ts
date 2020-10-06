import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { FullPageComponent } from './full-page/full-page.component';

const routes: Routes = [
  { path:'', component: FullPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
