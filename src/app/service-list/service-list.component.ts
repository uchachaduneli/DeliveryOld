import {Component, OnInit} from '@angular/core';
import {Service} from "../models/service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CarService} from "../services/car.service";
import {NotificationService} from "../services/notification.service";
import {ServiceService} from "../services/service.service";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  selectedObject: Service = {} as Service;

  objectsList: Service[] = [];

  constructor(private modalService: NgbModal, private service: ServiceService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getObjectsList();
  }

  update(content: any, obj: Service) {
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
    this.selectedObject = {} as Service;
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
