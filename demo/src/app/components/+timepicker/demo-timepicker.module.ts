import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimepickerModule } from 'ngx-bootstrap-th/timepicker';

import { DocsModule } from '../../docs';
import { TimepickerSectionComponent } from './timepicker-section.component';
import { DEMO_COMPONENTS } from './demos';
import { routes } from './demo-timepicker.routes';

@NgModule({
  declarations: [
    TimepickerSectionComponent,
    ...DEMO_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DocsModule,
    TimepickerModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [TimepickerSectionComponent],
  entryComponents: [...DEMO_COMPONENTS]
})
export class DemoTimepickerModule {}
