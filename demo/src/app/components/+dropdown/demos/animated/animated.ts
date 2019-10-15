import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap-th/dropdown';

@Component({
  selector: 'demo-dropdown-animation',
  templateUrl: './animated.html',
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class DemoDropdownAnimatedComponent {}