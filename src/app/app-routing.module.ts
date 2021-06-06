import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";

const routes: Routes = [
  {path: 'users', component: UserListComponent}, //URL -shi 'users' ro dainaxavs 'UserListComponent' am komponentze daaroutebs anu userebis teiblze
  {path: '', component: UserListComponent}, //Url-shi sicarielezec userebis teiblze aredictebs
  {path: 'create-user', component: CreateUserComponent},
  {path: 'update-user/:id', component: UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
