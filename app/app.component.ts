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
    ipcRenderer.on("reply", (event, arg) => {
      console.log("Reply was " + arg);
    });
  }

  public text_hello_world: string = "Hello Angular 2!";
  public text_small: string = "Greatness awaits..."

  public test(): void {
    console.log("Getestet");
    ipcRenderer.send("message", "tested");
  }

}
