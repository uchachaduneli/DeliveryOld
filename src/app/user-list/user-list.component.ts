import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  selectedObject: User = {} as User;

  objectsList: User[] = [];

  constructor(private modalService: NgbModal, private userService: UserService, private router: Router, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getObjectsList();
  }

  update(id: number) {
    this.router.navigate(['update-user', id]);
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(data => {
      this.notifyService.showSuccess("Data Has Been Deleted Successfully !!!", "User Deletion");
      console.log(data);
      this.getObjectsList();
    });
  }

  getObjectsList() {
    this.userService.getList().subscribe(data => {
      this.objectsList = data;
    });
  }

  closeModal() {
    this.selectedObject = {} as User;
    this.modalService.dismissAll();
  }

  openDetailsModal(content: any, id: number) {
    this.userService.getById(id).subscribe(data => {
      this.selectedObject = data;
    }, error => {
      console.log(error);
    });
    this.modalService.open(content, {centered: true, scrollable: true, size: 'lg'});
  }

}
