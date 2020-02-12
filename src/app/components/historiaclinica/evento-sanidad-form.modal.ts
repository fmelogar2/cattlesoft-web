import {Component, Input} from '@angular/core';
import {EventoSanidadFormComponent} from './evento-sanidad-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'evento-sanidad-form-modal',
  templateUrl: './evento-sanidad-form.modal.html'
})
export class EventoSanidadFormModal {
  @Input() eventoSanidad;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(EventoSanidadFormComponent, "eventoSanidad", this.eventoSanidad);
  }
}