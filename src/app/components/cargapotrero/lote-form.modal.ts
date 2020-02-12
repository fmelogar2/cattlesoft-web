import {Component, Input} from '@angular/core';
import {LoteFormComponent} from './lote-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'lote-form-modal',
  templateUrl: './lote-form.modal.html'
})
export class LoteFormModal {
  @Input() lote;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(LoteFormComponent, "lote", this.lote);
  }
}