import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { CreateQrCodeComponent } from './components/createQrCode/createQrCode.component';
import { QRCodeModule } from 'angularx-qrcode';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQrCodeComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
