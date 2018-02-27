import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  registerForm;

  constructor() { }

  ngOnInit() {
    console.log("Initializing the model from...");
    this.registerForm = new FormGroup(
        {
          name:new FormControl("Prafful "),
          email: new FormControl("prraful@gmail.com "),
          gender: new FormControl("male")
        }
      );
  }

  submitForm = function(user){
    console.log("model form works")
    console.log(user.name + ", " + user.email + ", " + user.gender) 
  }
}
