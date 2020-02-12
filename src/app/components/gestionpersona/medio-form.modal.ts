import {Component, Input} from '@angular/core';
import {MedioFormComponent} from './medio-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'medio-form-modal',
  templateUrl: './medio-form.modal.html'
})
export class MedioFormModal {
  @Input() medio;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(MedioFormComponent, "medio", this.medio);
  }
}