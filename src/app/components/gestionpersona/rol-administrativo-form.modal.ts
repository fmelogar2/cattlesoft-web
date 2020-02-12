import {Component, Input} from '@angular/core';
import {RolAdministrativoFormComponent} from './rol-administrativo-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'rol-administrativo-form-modal',
  templateUrl: './rol-administrativo-form.modal.html'
})
export class RolAdministrativoFormModal {
  @Input() rolAdministrativo;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(RolAdministrativoFormComponent, "rolAdministrativo", this.rolAdministrativo);
  }
}