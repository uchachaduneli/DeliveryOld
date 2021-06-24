import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../services/notification.service";
import {City} from "../models/city";
import {CityService} from "../services/city.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  selectedObject: City = {} as City;

  objectsList: City[] = [];

  constructor(private modalService: NgbModal, private service: CityService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getObjectsList();
  }

  update(content: any, obj: City) {
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
    this.selectedObject = {} as City;
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
