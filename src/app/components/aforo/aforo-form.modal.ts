import {Component, Input} from '@angular/core';
import {AforoFormComponent} from './aforo-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'aforo-form-modal',
  templateUrl: './aforo-form.modal.html'
})
export class AforoFormModal {
  @Input() aforo;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(AforoFormComponent, "aforo", this.aforo);
  }
}