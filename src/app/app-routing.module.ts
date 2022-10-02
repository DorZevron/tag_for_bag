import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQrCodeComponent } from './components/createQrCode/createQrCode.component';
import { SvgComponent } from './components/svg/svg.component';

const routes: Routes = [
  { path: 'home', component: CreateQrCodeComponent },
  { path: 'svg', component: SvgComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
