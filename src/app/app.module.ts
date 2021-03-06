import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {CreateUserComponent} from './create-user/create-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateUserComponent} from './update-user/update-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {HttpErrorInterceptor} from "./helpers/http-error.interceptor";
import {FontAwesomeModule, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {LoginComponent} from './login/login.component';
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import { ZoneListComponent } from './zone-list/zone-list.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { TranzitListComponent } from './tranzit-list/tranzit-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { RouteListComponent } from './route-list/route-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    LoginComponent,
    ZoneListComponent,
    WarehouseListComponent,
    TranzitListComponent,
    ServiceListComponent,
    RouteListComponent,
    ContactListComponent,
    CityListComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
