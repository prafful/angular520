import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';


@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  constructor(private userService:UserServiceService) {

    console.log(userService.showMyFriends());
    userService.friends.push("Sonu");

   }

  ngOnInit() {
  }

}
