import { Component, OnInit } from '@angular/core';
// import { initFederation } from '@angular-architects/module-federation';
import { init, registerRemotes, loadRemote } from '@module-federation/enhanced/runtime';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('*****');
    // initFederation({});
    init({
      name: 'my_host',
      remotes: []
    });
    
    // export type RemoteEntryType = 'var' | 'module' | 'assign' | 'assign-properties' | 'this' | 'window' | 'self' | 'global' | 'commonjs' | 'commonjs2' | 'commonjs-module' | 'commonjs-static' | 'amd' | 'amd-require' | 'umd' | 'umd2' | 'jsonp' | 'system' | string;
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
