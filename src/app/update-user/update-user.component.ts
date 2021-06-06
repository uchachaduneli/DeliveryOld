import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number = 0;
  object: User = {} as User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getById(this.id).subscribe(data => {
      this.object = data;
    }, error => {
      console.log(error);
    });
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

}
