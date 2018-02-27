import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs/Observable'
import { User} from '../user'


@Injectable()
export class UserServiceService {

  friends= ["Mehul", "Jayesh", "Danish", "Mandeep", "Akshay", "Sakshi", "Mohit"];

  showMyFriends(){
    return this.friends;
  }

  constructor(private httpClient: HttpClient) { }

  getRemoteData():Observable<User[]>{
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

}
