import {Component, Input} from '@angular/core';
import {PajillaFormComponent} from './pajilla-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'pajilla-form-modal',
  templateUrl: './pajilla-form.modal.html'
})
export class PajillaFormModal {
  @Input() pajilla;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(PajillaFormComponent, "pajilla", this.pajilla);
  }
}