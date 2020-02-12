import {Component, Input} from '@angular/core';
import {RazaFormComponent} from './raza-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'raza-form-modal',
  templateUrl: './raza-form.modal.html'
})
export class RazaFormModal {
  @Input() raza;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(RazaFormComponent, "raza", this.raza);
  }
}