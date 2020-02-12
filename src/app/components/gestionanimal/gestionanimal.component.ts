
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'gestionanimal',
  templateUrl: './gestionanimal.component.html',
  providers:  [UriProvider]
})
export class gestionAnimalComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}