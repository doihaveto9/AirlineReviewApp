import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  submitted: boolean = false;

  signUpForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){
  }

  async signUp(){
    this.submitted = true;

    if(this.signUpForm.valid){
      const status = await this.authService.signUp(this.signUpForm.controls.email.value, this.signUpForm.controls.password.value);

      if(status){
        alert("You have successfully signed up! Welcome!");
        sessionStorage.setItem('id', this.signUpForm.controls.email.value);
        this.router.navigateByUrl('/menu');
      }
      else{
        alert("Sign up failed! Please try again!");
      }
    }
  }
}
