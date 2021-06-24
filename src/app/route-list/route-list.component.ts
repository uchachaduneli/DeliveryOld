import {Component, OnInit} from '@angular/core';
import {Route} from "../models/route";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RouteService} from "../services/route.service";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  selectedObject: Route = {} as Route;

  objectsList: Route[] = [];

  constructor(private modalService: NgbModal, private service: RouteService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getObjectsList();
  }

  update(content: any, obj: Route) {
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
    this.selectedObject = {} as Route;
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
