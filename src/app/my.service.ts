import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  doSomething() {
    console.log("Service working!");
  }
}
