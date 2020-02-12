import {Component, Input} from '@angular/core';
import {MedicamentoFormComponent} from './medicamento-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'medicamento-form-modal',
  templateUrl: './medicamento-form.modal.html'
})
export class MedicamentoFormModal {
  @Input() medicamento;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(MedicamentoFormComponent, "medicamento", this.medicamento);
  }
}