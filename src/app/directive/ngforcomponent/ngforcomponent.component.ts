import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforcomponent',
  templateUrl: './ngforcomponent.component.html',
  styleUrls: ['./ngforcomponent.component.css']
})
export class NgforcomponentComponent implements OnInit {

  friends= ["Mehul", "Jayesh", "Danish", "Mandeep", "Akshay", "Sakshi", "Mohit"];

  friendName = ""
  constructor() { }

  ngOnInit() {
  }

  showFriendName = function(receivedCounter){
    console.log("Clicked on showFriendName " + this.friends[receivedCounter]);
    console.log("Deleting " + this.friends[receivedCounter]);
    this.friends.splice(receivedCounter, 1);
  }

  addFriend = function(){
    console.log("adding friend..." + this.friendName);
    this.friends.push(this.friendName);
    this.friendName="";
  }

}
