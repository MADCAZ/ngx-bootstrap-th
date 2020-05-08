// RECOMMENDED
import { PaginationModule } from 'ngx-bootstrap-th/pagination';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { PaginationModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [PaginationModule.forRoot(),...]
})
export class AppModule(){}
