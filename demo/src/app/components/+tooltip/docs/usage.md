// RECOMMENDED
import { TooltipModule } from 'ngx-bootstrap-th/tooltip';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { TooltipModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [TooltipModule.forRoot(),...]
})
export class AppModule(){}
