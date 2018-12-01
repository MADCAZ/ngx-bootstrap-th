import { Component, Output, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap-th/modal';
import { BsModalRef } from 'ngx-bootstrap-th/modal/bs-modal-ref.service';

@Component({
  selector: 'demo-modal-scrolling-long-content',
  templateUrl: './scrolling-long-content.html'
})
export class DemoModalScrollingLongContentComponent {
  modalRef: BsModalRef;
  items: any[];

  constructor(private modalService: BsModalService) {
    this.items = Array(15).fill(0);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
