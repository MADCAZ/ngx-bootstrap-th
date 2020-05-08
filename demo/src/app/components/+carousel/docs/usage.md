// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap-th/carousel';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
import { CarouselModule } from 'ngx-bootstrap-th';

@NgModule({
  imports: [CarouselModule.forRoot(),...]
})
export class AppModule(){}
