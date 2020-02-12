import {Component, Input} from '@angular/core';
import {EnfermedadFormComponent} from './enfermedad-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'enfermedad-form-modal',
  templateUrl: './enfermedad-form.modal.html'
})
export class EnfermedadFormModal {
  @Input() enfermedad;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(EnfermedadFormComponent, "enfermedad", this.enfermedad);
  }
}