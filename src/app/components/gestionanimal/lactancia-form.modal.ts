import {Component, Input} from '@angular/core';
import {LactanciaFormComponent} from './lactancia-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'lactancia-form-modal',
  templateUrl: './lactancia-form.modal.html'
})
export class LactanciaFormModal {
  @Input() lactancia;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(LactanciaFormComponent, "lactancia", this.lactancia);
  }
}