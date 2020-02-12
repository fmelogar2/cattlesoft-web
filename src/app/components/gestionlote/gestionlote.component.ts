
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'gestionlote',
  templateUrl: './gestionlote.component.html',
  providers:  [UriProvider]
})
export class gestionLoteComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}