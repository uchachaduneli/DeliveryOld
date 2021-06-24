import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../services/notification.service";
import {Contact} from "../models/contact";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  selectedObject: Contact = {} as Contact;

  objectsList: Contact[] = [];

  constructor(private modalService: NgbModal, private service: ContactService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getObjectsList();
  }

  update(content: any, obj: Contact) {
    this.selectedObject = obj;
    this.modalService.open(content, {centered: true, scrollable: true, size: 'lg'});
  }

  delete(id: number) {
    this.service.delete(id).subscribe(data => {
      this.notifyService.showSuccess("მონაცემების წაშლა დასრულდა წარმატებით !!!", "წაშლა");
      console.log(data);
      this.getObjectsList();
    });
  }

  getObjectsList() {
    this.service.getList().subscribe(data => {
      this.objectsList = data;
    });
  }

  closeModal() {
    this.selectedObject = {} as Contact;
    this.modalService.dismissAll();
  }

  openDetailsModal(content: any, id: number) {
    this.service.getById(id).subscribe(data => {
      this.selectedObject = data;
    }, error => {
      console.log(error);
    });
    this.modalService.open(content, {centered: true, scrollable: true, size: 'lg'});
  }

}
