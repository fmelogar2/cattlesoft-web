import {Component, Input} from '@angular/core';
import {TratamientoFormComponent} from './tratamiento-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'tratamiento-form-modal',
  templateUrl: './tratamiento-form.modal.html'
})
export class TratamientoFormModal {
  @Input() tratamiento;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(TratamientoFormComponent, "tratamiento", this.tratamiento);
  }
}