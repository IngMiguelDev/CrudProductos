import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { ProductMockupService } from './services/productMockup.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { StyleClassModule } from 'primeng/styleclass';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StyleClassModule,
    SharedModule
  ],
  providers: [
    MessageService,
    ProductMockupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
