import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleService} from "../services/role.service";
import {Role} from "../models/role";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number = 0;
  object: User = {} as User;
  roles: Role[] = [];

  constructor(private userService: UserService, private roleService: RoleService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getById(this.id).subscribe(data => {
      this.object = data;
    }, error => {
      console.log(error);
    });
    this.getRolesList();
  }

  redirectToMainTable(): void {
    this.router.navigate(['/users']);
  }

  save(): void {
    this.userService.update(this.object).subscribe(data => {
      this.redirectToMainTable();
    }, error => {
      console.log(error);
    });
  }

  onSubmit(): void {
    this.save();
  }

  private getRolesList() {
    this.roleService.getList().subscribe(data => {
      this.roles = data;
    });
  }
}
