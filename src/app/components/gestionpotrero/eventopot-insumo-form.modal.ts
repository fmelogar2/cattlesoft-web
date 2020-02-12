import {Component, Input} from '@angular/core';
import {EventopotInsumoFormComponent} from './eventopot-insumo-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'eventopot-insumo-form-modal',
  templateUrl: './eventopot-insumo-form.modal.html'
})
export class EventopotInsumoFormModal {
  @Input() eventopotInsumo;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(EventopotInsumoFormComponent, "eventopotInsumo", this.eventopotInsumo);
  }
}