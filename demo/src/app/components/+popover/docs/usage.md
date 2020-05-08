// RECOMMENDED
import { PopoverModule } from 'ngx-bootstrap-th/popover';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { PopoverModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [PopoverModule.forRoot(),...]
})
export class AppModule(){}
