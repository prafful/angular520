import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private us:UserServiceService) { 
          console.log(us.showMyFriends());
          us.friends.push("Tittu");
         
  }

  ngOnInit() {
  }

}
