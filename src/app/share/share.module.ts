import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports:[CommonModule],
  declarations: [],
  exports:[CommonModule,FormsModule,HttpModule]
})
export class ShareModule { }
