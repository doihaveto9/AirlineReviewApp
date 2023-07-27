import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  signIn (email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password).then(() => {
      console.log("Login Successful!");

      return true;
    })
    .catch((error) => {
      console.log("Log In Failed");

      return false
    });

  }

  signUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password).then(() => {
      console.log("SignUp Successful");

      return true;
    })
    .catch((error) => {
      console.log("SignUp Failed");

      return false;
    })
  }

  signOut(){
    return this.auth.signOut().then(() => {
      console.log("Sign Out Successful");

      return true;
    })
    .catch((error) => {
      console.log("Sign Out Failed")

      return false;
    })
  }
}
