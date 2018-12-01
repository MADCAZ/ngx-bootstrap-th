import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap-th/dropdown';

@Component({
  selector: 'demo-dropdown-config',
  templateUrl: './config.html',
  providers: [{ provide: BsDropdownConfig, useValue: { autoClose: false } }]
})
export class DemoDropdownConfigComponent {}
