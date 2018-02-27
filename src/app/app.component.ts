import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title = 'app';
  myName = 'Karam';
  counter = 1;


  sayHello = function(){
    //console.log("Hello to Console from angular " + this.counter);
    this.counter = this.counter +1;
  }

}
