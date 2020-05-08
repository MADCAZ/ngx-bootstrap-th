import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap-th/datepicker';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { BsDatepickerModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ...
  ]
})
export class AppModule(){}
