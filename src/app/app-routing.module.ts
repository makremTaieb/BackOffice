import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RelationComponent } from './relation/relation.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'', component: HomeComponent, data: {breadcrumb: 'Home'}},
  { path: 'relations', loadChildren: () => import('./relation/relation.module').then(mod => mod.RelationModule), data: { breadcrumb: 'relations' } },
  { path: 'users', loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule), data: { breadcrumb: 'users' } },
   {path:'**', redirectTo:'not-found', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
