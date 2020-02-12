
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'cargapotrero',
  templateUrl: './cargapotrero.component.html',
  providers:  [UriProvider]
})
export class cargaPotreroComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}