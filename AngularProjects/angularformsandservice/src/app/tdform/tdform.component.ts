import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {
  msg:string;
  constructor() { }

  ngOnInit(): void {
  }

  checkLogin(userObj):void{
    //console.log(userObj);
    if(userObj.uname == "Ravi" && userObj.pname==  "Kumar"){
          this.msg = "Successfully Login!";
    }else {
          this.msg = "Failure try once again!";
    }
  }

}
