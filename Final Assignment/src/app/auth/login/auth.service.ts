import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import * as moment from "moment";


@Injectable( {providedIn: "root"})
export class AuthService {

  constructor(private http: HttpClient){

  }

  createUser(userName: string, email: string, password: string){
    const userData= {
      email: email,
      password: password,
      username: userName
    }
    this.http.post("http://localhost:3000/users/signup", userData )
      .subscribe(response => {
        console.log(response);
      })
  }

  login(email: string, password: string) {
    const authData = {
      email: email,
      password: password
    }
    this.http.post("http://localhost:3000/users/login",  authData)
    .subscribe(res => this.setSession(res))
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}

logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
}
}
