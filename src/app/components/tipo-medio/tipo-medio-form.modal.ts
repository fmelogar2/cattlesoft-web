import {Component, Input} from '@angular/core';
import {TipoMedioFormComponent} from './tipo-medio-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'tipo-medio-form-modal',
  templateUrl: './tipo-medio-form.modal.html'
})
export class TipoMedioFormModal {
  @Input() tipoMedio;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(TipoMedioFormComponent, "tipoMedio", this.tipoMedio);
  }
}