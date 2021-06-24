import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {AuthGuard} from "./helpers/auth.guard";
import {ERole} from "./models/erole";
import {LoginComponent} from "./login/login.component";
import {CarListComponent} from "./car-list/car-list.component";
import {CityListComponent} from "./city-list/city-list.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {RouteListComponent} from "./route-list/route-list.component";
import {ServiceListComponent} from "./service-list/service-list.component";
import {TranzitListComponent} from "./tranzit-list/tranzit-list.component";
import {WarehouseListComponent} from "./warehouse-list/warehouse-list.component";
import {ZoneListComponent} from "./zone-list/zone-list.component";

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
  {
    path: 'cars',
    component: CarListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
  {
    path: 'cities',
    component: CityListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
  {
    path: 'contacts',
    component: ContactListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
  {
    path: 'routes',
    component: RouteListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
  {
    path: 'services',
    component: ServiceListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
  {
    path: 'tranzits',
    component: TranzitListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
  {
    path: 'warehouse',
    component: WarehouseListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
  {
    path: 'zones',
    component: ZoneListComponent,
    canActivate: [AuthGuard],
    data: {roles: [ERole.ADMIN, ERole.MANAGER]}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
