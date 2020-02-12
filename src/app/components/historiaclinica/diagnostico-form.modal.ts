import {Component, Input} from '@angular/core';
import {DiagnosticoFormComponent} from './diagnostico-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'diagnostico-form-modal',
  templateUrl: './diagnostico-form.modal.html'
})
export class DiagnosticoFormModal {
  @Input() diagnostico;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(DiagnosticoFormComponent, "diagnostico", this.diagnostico);
  }
}