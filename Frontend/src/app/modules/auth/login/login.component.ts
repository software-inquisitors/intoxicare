import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/GeneralData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = new FormGroup({});

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";

  constructor(
    private router: Router
    , private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(GeneralData.USERNAME_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
    });
  }

  onSubmit(): void {

    this.isLoggedIn = false;
  }

  /**
   * 
   */
  get GetForm() {
    return this.loginForm.controls;
  }

  reloadPage(): void {
    window.location.reload();
  }

}
