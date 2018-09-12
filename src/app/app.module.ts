import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DutyService} from "./duty/duty.service";
import {AppRoutingModule} from "./app-routing.module";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import { AppComponent } from './app.component';
import {LocationStrategy,HashLocationStrategy} from "@angular/common"
import {HttpModule} from "@angular/http";
import {StorageService} from "./services/storage.service"
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [SelectivePreloadingStrategy,StorageService,DutyService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
