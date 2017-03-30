import {
  Component
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
const ipcRenderer = require('electron').ipcRenderer;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor() {
  }
}
