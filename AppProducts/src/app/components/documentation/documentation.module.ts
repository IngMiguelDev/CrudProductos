import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { DocumentationRoutingModule } from './documentation-routing.module';



@NgModule({
  declarations: [
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    StyleClassModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
