
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'chequeo-mastitis',
  templateUrl: './chequeo-mastitis.component.html',
  providers:  [UriProvider]
})
export class ChequeoMastitisComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}