import {Component, Input} from '@angular/core';
import {AnimalRazaFormComponent} from './animal-raza-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'animal-raza-form-modal',
  templateUrl: './animal-raza-form.modal.html'
})
export class AnimalRazaFormModal {
  @Input() animalRaza;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(AnimalRazaFormComponent, "animalRaza", this.animalRaza);
  }
}