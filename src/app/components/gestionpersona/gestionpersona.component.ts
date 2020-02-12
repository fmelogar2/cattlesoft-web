
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'gestionpersona',
  templateUrl: './gestionpersona.component.html',
  providers:  [UriProvider]
})
export class gestionPersonaComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}