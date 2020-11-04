import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MdformComponent implements OnInit {

  userRef = new FormGroup({
    uname:new FormControl(),
    pname:new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }
  checkUser() {
    //console.log(this.userRef);
    console.log(this.userRef.value);
  }

}
