import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginDetailsGroup!: FormGroup;
  formSubmitAttempt = false;
  visible:boolean = false;
  eyeIcon = faEye;

  constructor(private form: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginDetailsGroup = this.form.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: []
    })
  }

  requiredError(control:string){
    if((this.loginDetailsGroup.controls[control].touched && this.loginDetailsGroup.controls[control].invalid) || (this.formSubmitAttempt && this.loginDetailsGroup.controls[control].invalid)){
      return true;
    }
    return false;
  }

  onSubmit() {
    this.formSubmitAttempt = true;
    if (this.loginDetailsGroup.valid) {
      alert("Welcome Back, You logined successfully");
      this.router.navigate(['']);
    }
    // console.log(this.loginDetailsGroup.value);
  }

  isVisible(){
    this.visible = !this.visible;
  }

  SeekPassword(){
    return(this.visible ? 'text': 'password')
  }

}
