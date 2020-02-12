
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';

@Component({
  selector: 'enfermedad',
  templateUrl: './enfermedad.component.html',
  providers:  [UriProvider]
})
export class EnfermedadComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
  }

}