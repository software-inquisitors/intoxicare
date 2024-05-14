import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../helpers/storage.service'
import { AuthService } from '../../../../helpers/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public _storageService: Boolean = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this._storageService = this.storageService.isLoggedIn();
  }

  /**
   * 
   */
  logout(): void {

    this.authService.logout();
  }

}
