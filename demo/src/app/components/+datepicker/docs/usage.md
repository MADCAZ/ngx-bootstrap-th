import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap-th/datepicker';
// or
import { BsDatepickerModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ...
  ]
})
export class AppModule(){}
