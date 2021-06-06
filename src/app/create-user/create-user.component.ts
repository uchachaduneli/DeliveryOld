import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  object: User = new User();

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {

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

}
