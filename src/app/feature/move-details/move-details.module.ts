import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveDetailsRoutingModule } from './move-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoveDetailsComponent } from './move-details.component';


@NgModule({
  declarations: [MoveDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MoveDetailsRoutingModule
  ]
})
export class MoveDetailsModule { }
