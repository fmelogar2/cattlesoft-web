import {Component, Input} from '@angular/core';
import {DominioFormComponent} from './dominio-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'dominio-form-modal',
  templateUrl: './dominio-form.modal.html'
})
export class DominioFormModal {
  @Input() dominio;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(DominioFormComponent, "dominio", this.dominio);
  }
}