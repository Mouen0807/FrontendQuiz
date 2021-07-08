import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid );
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPasswordComponent implements OnInit {

  username: string;
  password: string;
  confirmedPassword: string;
  hide: boolean; // bool to manage the eye button on email field

  myForm = this.formBuilder.group(
  {   password: ['', Validators.required],
      confirmPassword: ['']
  }, { validator: this.checkPasswords });

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) {

    this.username = '';
    this.confirmedPassword = '';
    this.password = '';
    this.hide = true;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

  checkPasswords(group: FormGroup): any { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
