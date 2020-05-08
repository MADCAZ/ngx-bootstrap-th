// RECOMMENDED
import { ProgressbarModule } from 'ngx-bootstrap-th/progressbar';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { ProgressbarModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [ProgressbarModule.forRoot(),...]
})
export class AppModule(){}
