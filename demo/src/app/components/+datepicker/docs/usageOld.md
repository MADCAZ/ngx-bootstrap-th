// RECOMMENDED
import { DatepickerModule } from 'ngx-bootstrap-th/datepicker';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { DatepickerModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [DatepickerModule.forRoot(),...]
})
export class AppModule(){}
