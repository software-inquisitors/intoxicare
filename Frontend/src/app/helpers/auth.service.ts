import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { HttpsServiceService } from '../services/https-service.service'

interface loginResponse {
  status: boolean,
  message: string,
  username: Object
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private router: Router,
    private storageService: StorageService,
    private _apiService: HttpsServiceService
  ) { }

  /**
   * 
   * @param username 
   * @param password 
   * @returns 
   */
  async login(username: string, password: string): Promise<any> {

    const data = await this._apiService.requestPost("auth/login", {
      "userName": username,
      "password": password
    }).toPromise();

    return data;
  }

  /**
   * 
   * @returns 
   */
  logout(): Boolean {
    this.storageService.removeUser();
    window.location.reload();
    return true;
  }

}
