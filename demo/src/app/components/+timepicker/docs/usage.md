// RECOMMENDED
import { TimepickerModule } from 'ngx-bootstrap-th/timepicker';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { TimepickerModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [TimepickerModule.forRoot(),...]
})
export class AppModule(){}
