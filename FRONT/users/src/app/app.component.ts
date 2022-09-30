import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';
  users:any;
  constructor(private UserData: UserDataService){
    this.UserData.users().subscribe((data)=>{this.users = data;})
  }

  getDetails(data:any){
    console.warn(data);
    this.UserData.saveDetails(data).subscribe((result)=>console.warn(result))
  }
}
