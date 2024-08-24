import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    StyleClassModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
