// RECOMMENDED
import { RatingModule } from 'ngx-bootstrap-th/rating';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { RatingModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [RatingModule.forRoot(),...]
})
export class AppModule(){}
