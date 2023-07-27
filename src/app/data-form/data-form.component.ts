import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ){}

  dataForm = this.formBuilder.nonNullable.group({
    airline: ['', [Validators.required]],
    arrivalDate: ['', [Validators.required]],
    arrivalTime: ['', [Validators.required]],
    flightNumber: ['', [Validators.required]],
    numOfGuests: ['', [Validators.required]],
    comments: ['']
  });

  submitData(){
    console.log("submitData called");

    this.submitted = true;

    if(this.dataForm.valid){
      console.log("form is valid");
      const headers = { 'token': 'SGV5IHRoZXJlIFBydWRodmkhICBMb29rcyBsaWtlIHlvdSBmb3VuZCBteSBsaXR0bGUgZWFzdGVyIGVnZy4gQnJpbmcgdGhpcyB1cCBpbiB0aGUgaW50ZXJ2aWV3IGZvciBib251cyBwb2ludHMh'};

      //The form Validation will make sure there are values present, so we shouldn't have to worry about them being null
      const body = {
        airline: this.dataForm.get('airline')?.value,
        arrivalDate: this.dataForm.get('arrivalDate')?.value,
        arrivalTime: this.dataForm.get('arrivalTime')?.value,
        flightNumber: this.dataForm.get('flightNumber')?.value,
        numOfGuests: this.dataForm.get('numOfGuests')?.value,
        comments: this.dataForm.get('comments')?.value
      }

      this.http.post<any>('https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge', body, { headers }).subscribe(data => {
        console.log(data);

        if(data == true){
          alert('Form successfully submitted! Thank you for using our app!');
          this.router.navigateByUrl('/menu');
        }
        else{
          alert('Form could not be submitted, please try again!');
        }
      })
    }
  }
}
