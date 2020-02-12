import {Component, Input} from '@angular/core';
import {EventoReproduccionFormComponent} from './evento-reproduccion-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'evento-reproduccion-form-modal',
  templateUrl: './evento-reproduccion-form.modal.html'
})
export class EventoReproduccionFormModal {
  @Input() eventoReproduccion;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(EventoReproduccionFormComponent, "eventoReproduccion", this.eventoReproduccion);
  }
}