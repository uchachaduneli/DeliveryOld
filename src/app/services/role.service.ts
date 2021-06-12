import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/role";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private BaseUrl = `${environment.apiUrl}/role`;

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.BaseUrl}`);
  }
}
