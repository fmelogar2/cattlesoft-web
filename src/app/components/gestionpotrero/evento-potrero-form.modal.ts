import {Component, Input} from '@angular/core';
import {EventoPotreroFormComponent} from './evento-potrero-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'evento-potrero-form-modal',
  templateUrl: './evento-potrero-form.modal.html'
})
export class EventoPotreroFormModal {
  @Input() eventoPotrero;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(EventoPotreroFormComponent, "eventoPotrero", this.eventoPotrero);
  }
}