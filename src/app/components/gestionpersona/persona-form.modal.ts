import {Component, Input} from '@angular/core';
import {PersonaFormComponent} from './persona-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'persona-form-modal',
  templateUrl: './persona-form.modal.html'
})
export class PersonaFormModal {
  @Input() persona;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(PersonaFormComponent, "persona", this.persona);
  }
}