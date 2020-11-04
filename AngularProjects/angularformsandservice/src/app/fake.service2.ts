import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FakeService2 {
    
    constructor(private httpClient:HttpClient){}    //DI for HttpClient 
    sayHello():string {
        return "Welcome to Angular Service using DI";
    }

    loadData():Observable<Fake[]>{
    return this.httpClient.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");        
    }
}

//Model Class -- This class help to map json data from REST API
export class Fake {
    constructor(public userId:number,
        public id:number,
        public title:string,
        public completed:boolean){}
}