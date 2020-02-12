import {Component, Input} from '@angular/core';
import {AnimalFormComponent} from './animal-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'animal-form-modal',
  templateUrl: './animal-form.modal.html'
})
export class AnimalFormModal {
  @Input() animal;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(AnimalFormComponent, "animal", this.animal);
  }
}