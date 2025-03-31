import { Component, OnInit } from '@angular/core';
import { initFederation } from '@angular-architects/module-federation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('*****');
    initFederation({});
  }

}
