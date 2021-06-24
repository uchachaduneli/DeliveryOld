import {Component, OnInit} from '@angular/core';
import {Tranzit} from "../models/tranzit";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NotificationService} from "../services/notification.service";
import {TranzitService} from "../services/tranzit.service";

@Component({
  selector: 'app-tranzit-list',
  templateUrl: './tranzit-list.component.html',
  styleUrls: ['./tranzit-list.component.css']
})
export class TranzitListComponent implements OnInit {

  selectedObject: Tranzit = {} as Tranzit;

  objectsList: Tranzit[] = [];

  constructor(private modalService: NgbModal, private service: TranzitService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getObjectsList();
  }

  update(content: any, obj: Tranzit) {
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
    this.selectedObject = {} as Tranzit;
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
