
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'gestionpotrero',
  templateUrl: './gestionpotrero.component.html',
  providers:  [UriProvider]
})
export class gestionPotreroComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}