import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { ComponentLoaderFactory } from 'ngx-bootstrap-th/component-loader';
import { PositioningService } from 'ngx-bootstrap-th/positioning';

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipDirective, TooltipContainerComponent],
  exports: [TooltipDirective],
  entryComponents: [TooltipContainerComponent]
})
export class TooltipModule {
  static forRoot(): ModuleWithProviders<TooltipModule> {
    return {
      ngModule: TooltipModule,
      providers: [ComponentLoaderFactory, PositioningService]
    };
  }
}
