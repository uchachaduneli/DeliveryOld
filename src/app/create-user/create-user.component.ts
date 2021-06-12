import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {RoleService} from "../services/role.service";
import {Role} from "../models/role";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  object: User = new User();
  roles: Role[] = [];

  constructor(private userService: UserService, private roleService: RoleService, private router: Router) {
  }

  ngOnInit(): void {
    this.getRolesList();
  }

  redirectToMainTable(): void {
    this.router.navigate(['/users']);
  }

  save(): void {
    this.userService.create(this.object).subscribe(data => {
      this.redirectToMainTable();
    }, error => {
      console.log(error);
    });
  }

  onSubmit(): void {
    console.log(this.object);
    this.save();
  }

  private getRolesList() {
    this.roleService.getList().subscribe(data => {
      this.roles = data;
    });
  }
}
