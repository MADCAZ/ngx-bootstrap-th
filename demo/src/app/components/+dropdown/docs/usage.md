import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap-th/dropdown';
// or
import { BsDropdownModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ]
})
export class AppModule(){}

Also should be added web-animations-js polyfill for IE browser (Edge)
