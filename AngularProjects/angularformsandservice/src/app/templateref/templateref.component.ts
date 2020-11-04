import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref',
  templateUrl: './templateref.component.html',
  styleUrls: ['./templateref.component.css']
})
export class TemplaterefComponent implements OnInit {
  fname:string;
  constructor() { }

  ngOnInit(): void {
  }

  fun(name): void {
    console.log("Event fire");
    //console.log(name);
    this.fname = name;
  }
}
