import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { TypeaheadModule } from 'ngx-bootstrap-th/typeahead';
// or
import { TypeaheadModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    ...
  ]
})
export class AppModule(){}
