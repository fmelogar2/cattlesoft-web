import {Component, Input} from '@angular/core';
import {LluviaFormComponent} from './lluvia-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'lluvia-form-modal',
  templateUrl: './lluvia-form.modal.html'
})
export class LluviaFormModal {
  @Input() lluvia;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(LluviaFormComponent, "lluvia", this.lluvia);
  }
}