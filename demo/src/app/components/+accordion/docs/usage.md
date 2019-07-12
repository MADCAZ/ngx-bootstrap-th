import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { AccordionModule } from 'ngx-bootstrap-th/accordion';
// or
import { AccordionModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ...
  ]
})
export class AppModule(){}

Also should be added web-animations-js polyfill for IE browser (Edge)
