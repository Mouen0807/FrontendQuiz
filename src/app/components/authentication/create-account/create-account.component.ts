import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateAccountComponent implements OnInit {

  username: string;
  newAccount: string;
  emailValue: string;
  country: string;

  myForm = this.formBuilder.group({
    email:    ['', [Validators.required, Validators.email] ],
    username: ['',  Validators.required ],
    country:  ['',  Validators.required ]
  });



  countries: Country[] = [
    {value: 'Dog', viewValue: 'Cameroun'},
    {value: 'Cat', viewValue: 'Cote d ivoire'},
    {value: 'Cow', viewValue: 'France'},
    {value: 'Fox', viewValue: 'Congo'},
  ];

  constructor(private formBuilder: FormBuilder) {
    this.username = '';
    this.newAccount = 'Creer un compte';
    this.emailValue = '';
    this.country = '';
  }

  getErrorMessage(): string{
    if (this.myForm.controls.email.hasError('required')) {
      return 'Vous devez entrer une adresse mail';
    }
    return this.myForm.controls.email.hasError('email') ? 'email invalide' : '';
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }


}
