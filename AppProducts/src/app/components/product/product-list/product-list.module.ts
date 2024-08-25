import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    TableModule,
    TooltipModule,
    MessagesModule,
    ToastModule,
    StyleClassModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
  ],
  providers: [
    ConfirmationService, 
    MessageService
  ]
})
export class ProductListModule { }
