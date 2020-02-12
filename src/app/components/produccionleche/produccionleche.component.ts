
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'produccionleche',
  templateUrl: './produccionleche.component.html',
  providers:  [UriProvider]
})
export class produccionLecheComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}