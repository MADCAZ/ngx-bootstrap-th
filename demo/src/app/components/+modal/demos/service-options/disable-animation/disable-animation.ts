import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap-th/modal';
import { BsModalRef } from 'ngx-bootstrap-th/modal/bs-modal-ref.service';

@Component({
  selector: 'demo-modal-service-disable-animation',
  templateUrl: './disable-animation.html'
})
export class DemoModalServiceDisableAnimationComponent {
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
