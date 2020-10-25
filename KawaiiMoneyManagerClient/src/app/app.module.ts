import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './titlebar/title-bar/title-bar.component';
import { NavigationComponent } from './titlebar/navigation/navigation.component';
import { HomeComponent } from './content/home/home.component';
import { DashboardItemComponent } from './content/home/dashboard-item/dashboard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavigationComponent,
    HomeComponent,
    DashboardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
