import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';
import { User} from '../../user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  observableUser:Observable<User[]>;
  user: User[];

  constructor(private uss:UserServiceService) { }

  ngOnInit() {
    this.getRemoteData();
  }

  getRemoteData(){
    this.observableUser = this.uss.getRemoteData();
    this.observableUser.subscribe(
      user => {
        this.user = user;
        console.log(user);
      }
    )
  }



}
