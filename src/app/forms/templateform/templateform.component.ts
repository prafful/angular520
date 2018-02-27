import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm = function(user){
    console.log("form works")
    console.log(user.name + ", " + user.email + ", " + user.gender) 
  }

}
