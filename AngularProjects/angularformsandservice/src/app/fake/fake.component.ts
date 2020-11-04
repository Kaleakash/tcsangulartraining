import { Component, OnInit } from '@angular/core';
import { FakeService1 } from '../fake.service1';
import { Fake, FakeService2 } from '../fake.service2';
@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  msg1:string;
  msg2:string;

  fakeObject:Fake[];    //created array object to load the data. 

  constructor(private fakeSer2:FakeService2) { }    // Pull object or DI

  ngOnInit(): void {
    this.fakeSer2.loadData().subscribe(data=>this.fakeObject=data); //data store in fakeObject 
  }
  fun1() {
    let ff1 = new FakeService1();
    this.msg1 = ff1.sayHello();
  }
  fun2(){
    this.msg2= this.fakeSer2.sayHello();
  }


}
