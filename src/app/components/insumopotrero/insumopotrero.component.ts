
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'insumopotrero',
  templateUrl: './insumopotrero.component.html',
  providers:  [UriProvider]
})
export class insumoPotreroComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}