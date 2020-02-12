import {Component, Input} from '@angular/core';
import {DetalleAforoFormComponent} from './detalle-aforo-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'detalle-aforo-form-modal',
  templateUrl: './detalle-aforo-form.modal.html'
})
export class DetalleAforoFormModal {
  @Input() detalleAforo;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(DetalleAforoFormComponent, "detalleAforo", this.detalleAforo);
  }
}