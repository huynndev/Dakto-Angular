import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [DashboardComponent, ContactComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-quuPI6Vl0TVx_kIhehxSHDqgYVRONrc'
    })
  ]
})
export class DashboardModule { }
