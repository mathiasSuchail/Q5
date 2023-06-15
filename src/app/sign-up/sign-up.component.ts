import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class form {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) {}
  public maxlength = 15;
  public minlength = 3;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  public form: form = new form('', '', '', '');
  onSubmit(): void {
    console.log(this.form);
  }
}
