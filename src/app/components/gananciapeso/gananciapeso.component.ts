
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'gananciapeso',
  templateUrl: './gananciapeso.component.html',
  providers:  [UriProvider]
})
export class gananciaPesoComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}