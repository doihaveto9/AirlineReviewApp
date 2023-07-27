import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.css'],
})
export class LogInComponentComponent {

  submitted: boolean = false;

  logInForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){
  }

  async logIn(){
    this.submitted = true;

    if(this.logInForm.valid){
      const status = await this.authService.signIn(this.logInForm.controls.email.value, this.logInForm.controls.password.value);
      
      if(status){
        console.log("Successful Baby!!!")
        sessionStorage.setItem('id', this.logInForm.controls.email.value);
  
        alert('Log in Successful!');
        this.router.navigateByUrl('/menu');
      }
      else{
        alert('Log in failed, please try again!');
      }
    }
  }
}
