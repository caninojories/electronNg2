import {
  NgModule
} from "@angular/core"
import {
  BrowserModule
} from "@angular/platform-browser";
import {
  FormsModule
} from "@angular/forms";
/*components*/
import {
  AppComponent
} from "./app.component";
import {
  IndexComponent
} from './components/index/index.component';
import {
  PageNotFoundComponent
} from './components/404/page.not.found.component';
/* routing */
import {
  rootRouting
} from './components/root.route.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    rootRouting
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
