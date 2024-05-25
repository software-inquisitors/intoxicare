import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Intoxicare';
  header = true;
  footer = true

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavbarVisibility(event.urlAfterRedirects);
      }
    });
  }

  updateNavbarVisibility(url: string): void {
    // Lista de rutas donde no se debe mostrar el navbar
    const noNavbarRoutes = ['/graph'];

    // Verifica si la URL actual empieza con alguna de las rutas en la lista
    this.header = !noNavbarRoutes.some(route => url.startsWith(route));
    this.footer = !noNavbarRoutes.some(route => url.startsWith(route));
  }
}
