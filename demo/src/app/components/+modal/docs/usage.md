// RECOMMENDED
import { ModalModule } from 'ngx-bootstrap-th/modal';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { ModalModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [ModalModule.forRoot(),...]
})
export class AppModule(){}
