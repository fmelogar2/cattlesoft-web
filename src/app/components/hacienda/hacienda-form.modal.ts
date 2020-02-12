import {Component, Input} from '@angular/core';
import {HaciendaFormComponent} from './hacienda-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'hacienda-form-modal',
  templateUrl: './hacienda-form.modal.html'
})
export class HaciendaFormModal {
  @Input() hacienda;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(HaciendaFormComponent, "hacienda", this.hacienda);
  }
}