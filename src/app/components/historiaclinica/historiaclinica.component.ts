
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'historiaclinica',
  templateUrl: './historiaclinica.component.html',
  providers:  [UriProvider]
})
export class historiaClinicaComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}