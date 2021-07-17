import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveDetailsComponent } from './move-details.component';

const routes: Routes = [
  {path:'',component:MoveDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveDetailsRoutingModule { }
