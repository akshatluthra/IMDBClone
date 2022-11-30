import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginDetailsGroup!: FormGroup

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
    this.loginDetailsGroup = this.form.group({
      email: [],
      password: [],
      remember: []
    })
  }

  onSubmit() {
    console.log(this.loginDetailsGroup.value);
  }

}
