
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'tipo-medio',
  templateUrl: './tipo-medio.component.html',
  providers:  [UriProvider]
})
export class TipoMedioComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}