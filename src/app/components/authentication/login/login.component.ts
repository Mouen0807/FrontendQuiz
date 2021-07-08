import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  myForm = this.formBuilder.group(
  {
      password: ['', Validators.required],
      username: ['', Validators.required]
  });


  username: string;
  password: string;
  newAccount: string;
  hide: boolean; // bool to manage the eye button on email field

  constructor(private formBuilder: FormBuilder) {
    this.username = '';
    this.password = '';
    this.newAccount = 'Creer un compte';
    this.hide = true;
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

  ngOnInit(): void {
  }

  onClickLoginButton(event: any): void{
  }

}
