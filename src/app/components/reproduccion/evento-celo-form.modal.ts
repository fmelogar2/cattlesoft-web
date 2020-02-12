import {Component, Input} from '@angular/core';
import {EventoCeloFormComponent} from './evento-celo-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'evento-celo-form-modal',
  templateUrl: './evento-celo-form.modal.html'
})
export class EventoCeloFormModal {
  @Input() eventoCelo;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(EventoCeloFormComponent, "eventoCelo", this.eventoCelo);
  }
}