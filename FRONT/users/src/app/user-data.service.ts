import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _url = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  users(){
    return this.http.get(this._url)
  }

  saveDetails(data:any){
    return this.http.post(this._url, data)
  }
}
