import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundComponent } from '../public/errors/not-found/not-found.component';
import { PerfilFormComponent } from './perfil/pages/perfil-form/perfil-form.component';

const routes: Routes = [
    {
        path: "perfil",
        component: PerfilComponent
    },
    {
        path: "perfil-form",
        component: PerfilFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
