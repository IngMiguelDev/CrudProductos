import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PresentationRoutingModule } from './presentation-routing.module';



@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    StyleClassModule,
    PresentationRoutingModule
  ]
})
export class PresentationModule { }
