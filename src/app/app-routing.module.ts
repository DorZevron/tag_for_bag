import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CreateQrCodeComponent } from './components/createQrCode/createQrCode.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SvgComponent } from './components/svg/svg.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'svg', component: SvgComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
