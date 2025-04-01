import { Component, OnInit } from '@angular/core';
import { registerRemotes, loadRemote } from '@module-federation/enhanced/runtime';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('*****');
    registerRemotes([{
      name: 'mfe1',
      type: 'module',
      entry: 'http://localhost:3000/remoteEntry.js'
    }]);

    loadRemote('mfe1/Module').then(r => {
      console.log('-----------------------', r);
    });
  }

}
