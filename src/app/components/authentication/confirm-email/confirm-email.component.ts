import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {  NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmEmailComponent implements OnInit {

  myForm = this.formBuilder.group(
  {
    code: ['', Validators.required]
  });


  code: string;

  constructor(private formBuilder: FormBuilder) {
    this.code = '';
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

  onClickConfirmEmail(event: any): void{
    console.log(this.myForm.value);
  }

}
