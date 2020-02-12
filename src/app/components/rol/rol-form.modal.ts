import {Component, Input} from '@angular/core';
import {RolFormComponent} from './rol-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'rol-form-modal',
  templateUrl: './rol-form.modal.html'
})
export class RolFormModal {
  @Input() rol;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(RolFormComponent, "rol", this.rol);
  }
}