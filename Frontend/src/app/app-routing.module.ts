import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/public/template/home/home.component';
import { NotFoundComponent } from './modules/public/errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: "home",
    //canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(x => x.AuthModule)
  },
  {
    path: "graph",
    loadChildren: () => import("./modules/graph/graph.module").then(x => x.AdminModule)
  },
  {
    path: "user",
    loadChildren: () => import("./modules/user/user.module").then(x => x.UserModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
