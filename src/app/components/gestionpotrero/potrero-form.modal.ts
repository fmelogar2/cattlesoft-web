import {Component, Input} from '@angular/core';
import {PotreroFormComponent} from './potrero-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'potrero-form-modal',
  templateUrl: './potrero-form.modal.html'
})
export class PotreroFormModal {
  @Input() potrero;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(PotreroFormComponent, "potrero", this.potrero);
  }
}