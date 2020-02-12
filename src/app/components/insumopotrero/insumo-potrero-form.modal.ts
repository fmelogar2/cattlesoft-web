import {Component, Input} from '@angular/core';
import {InsumoPotreroFormComponent} from './insumo-potrero-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'insumo-potrero-form-modal',
  templateUrl: './insumo-potrero-form.modal.html'
})
export class InsumoPotreroFormModal {
  @Input() insumoPotrero;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(InsumoPotreroFormComponent, "insumoPotrero", this.insumoPotrero);
  }
}