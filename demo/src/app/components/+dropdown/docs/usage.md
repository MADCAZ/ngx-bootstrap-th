import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap-th/dropdown';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { BsDropdownModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ]
})
export class AppModule(){}

Also should be added web-animations-js polyfill for IE browser (Edge)
