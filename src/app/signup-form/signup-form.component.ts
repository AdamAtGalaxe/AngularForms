import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  minLength= 3
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(this.minLength),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique

    ]),
    password: new FormControl("", Validators.required)
  });

  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
}
