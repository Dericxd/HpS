import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url = `${environment.url}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsers() {
    return this.httpClient.get(`${url}/user`);
  }

  postUsers(user: any) {
    return this.httpClient.post(`${url}/user/create`, user);
  }
}
