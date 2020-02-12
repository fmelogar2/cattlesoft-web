import {Component, Input} from '@angular/core';
import {ChequeoMastitisFormComponent} from './chequeo-mastitis-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'chequeo-mastitis-form-modal',
  templateUrl: './chequeo-mastitis-form.modal.html'
})
export class ChequeoMastitisFormModal {
  @Input() chequeoMastitis;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(ChequeoMastitisFormComponent, "chequeoMastitis", this.chequeoMastitis);
  }
}