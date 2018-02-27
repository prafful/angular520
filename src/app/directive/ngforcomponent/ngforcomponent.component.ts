import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforcomponent',
  templateUrl: './ngforcomponent.component.html',
  styleUrls: ['./ngforcomponent.component.css']
})
export class NgforcomponentComponent implements OnInit {

  showFlag = false;
  age = 30;

  friends= ["Mehul", "Jayesh", "Danish", "Mandeep", "Akshay", "Sakshi", "Mohit"];
  worldFriends = [
                      {
                        name:"Yuko",
                        location:"Tokyo",
                        age:30
                      },
                      {
                        name:"John",
                        location:"Canada",
                        age:54
                      },
                      {
                        name:"Merry",
                        location:"Denmark",
                        age:61
                      },
                      {
                        name:"Yaki",
                        location:"Russia",
                        age:39
                      },
                      {
                        name:"Jimmy",
                        location:"Malaysia",
                        age:10
                      }


  ]
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
      if(this.friendName!=""){
        console.log("adding friend..." + this.friendName);
        this.friends.push(this.friendName);
        this.friendName="";
    }
  }

}
