import { Component, OnInit } from '@angular/core';
import {DutyService} from "../duty/duty.service";
import {StorageService} from "../services/storage.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  currentLoginUserName;
  currentLoginUserId;
  constructor(
    public dutyService:DutyService,
    public storageService:StorageService
  ) { }

  ngOnInit() {
    // let queryString=location.search;
    // console.log(queryString)
    // let queryArr=queryString.split('=');
    // this.currentLoginUserId=queryArr[1];
    // console.log(this.currentLoginUserId)
    this.currentLoginUserId = sessionStorage.getItem('userid');
    if(!this.currentLoginUserId){
      this.currentLoginUserId = 'a12229';
    }
    this.storageService.setCurrentLoginUserId('userid',this.currentLoginUserId)
    this.dutyService.getCurrentLoginUserName({userId:this.currentLoginUserId}).subscribe(data=>{
      console.log(data)
      this.currentLoginUserName = data.data[0]
    })
  }
}
