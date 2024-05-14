import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../helpers/storage.service';
import { AuthService } from '../../../helpers/auth.service';
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
    private authService: AuthService
    , private storageService: StorageService
    , private router: Router
    , private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(GeneralData.USERNAME_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
    });

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['admin/dashboard']);
    }
  }

  onSubmit(): void {

    this.isLoggedIn = false;

    let request = this.authService.login(this.GetForm['username'].value, this.GetForm['password'].value);
    request.then((response => {

      //In case of enabling authentication through the API
      if (response.status) {
        this.storageService.saveUser(response);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.reload();
      }
      else {
        this.errorMessage = "Error when logging in, I checked user and password";
        this.isLoginFailed = true;
        this.isLoggedIn = false;
      }

    }))
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
