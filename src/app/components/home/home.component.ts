
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'activa 5g',
    'activa 6g',
    'pep+',
    'maestro'
  ];

  bikeform: FormGroup = new FormGroup({}); // Form group used to validate form in angular

  validationMessage: string = '';

  constructor(private bikeService:BikeService) { }

  ngOnInit(): void {
    this.bikeform = new FormGroup(
      {
        name: new FormControl('' , Validators.required), // 1 arg = default value for this field, 2 arg = validation required 
        email: new FormControl('' , Validators.required),
        phone: new FormControl('' , Validators.required),
        model: new FormControl('' , Validators.required),
        serialNumber: new FormControl('' , Validators.required),
        purchasePrice: new FormControl('' , Validators.required),
        purchaseDate:new FormControl('' , Validators.required),
        contact: new FormControl()
      }
    )
  }

  submitRegistration(){
    if(this.bikeform.valid){
      this.validationMessage = "Your bike registration form has been submitted. Thank you!";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe( // call the createBikeReg method and return observable whom we will subscribe and handle data and error properly
          data => {
            this.bikeform.reset();
            return true;
          },
          err => {
            return Observable.throw(new Error(""));
          }
      )
    }
    else{
      this.validationMessage = "Please fill out the form before submitting."
    }
  }
}
