import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {AuthGuard} from "./helpers/auth.guard";
import {ERole} from "./models/erole";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  }, //URL -shi 'users' ro dainaxavs 'UserListComponent' am komponentze daaroutebs anu userebis teiblze
  {
    path: '',
    component: UserListComponent
  }, //Url-shi sicarielezec userebis teiblze aredictebs
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN]}
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN]}
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
