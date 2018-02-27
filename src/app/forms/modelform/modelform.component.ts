import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


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
          name:new FormControl("", Validators.compose(
                                          [
                                            Validators.required, 
                                            Validators.minLength(4),
                                            Validators.pattern('^[a-zA-Z]+$')
                                          ]
                                        )),
          email: new FormControl(" " ),
          gender: new FormControl("")
        }
      );
  }

  validateEmailLength= function(control){
      
  }


  submitForm = function(user){
    console.log("model form works")
    console.log(user.name + ", " + user.email + ", " + user.gender) 
  }

  

}
