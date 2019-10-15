import {
  Component,
  Host,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';

import { ProgressbarComponent } from './progressbar.component';
import { isBs3 } from 'ngx-bootstrap-th/utils';

// todo: number pipe
// todo: use query from progress?
@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  host: {
    role: 'progressbar',
    'aria-valuemin': '0',
    '[class.progress-bar-animated]': '!isBs3 && animate',
    '[class.progress-bar-striped]': 'striped',
    '[class.active]': 'isBs3 && animate',
    '[attr.aria-valuenow]': 'value',
    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
    '[attr.aria-valuemax]': 'max',
    '[style.height.%]': '"100"'
  }
})
export class BarComponent implements OnInit, OnDestroy {
  max: number;

  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input()
  get type(): string {
    return this._type;
  }

  set type(v: string) {
    this._type = v;
    this.applyTypeClasses();
  }

  /** current value of progress bar */
  @Input()
  get value(): number {
    return this._value;
  }

  set value(v: number) {
    if (!v && v !== 0) {
      return;
    }
    this._value = v;
    this.recalculatePercentage();
  }

  @HostBinding('style.width.%')
  get setBarWidth() {
    this.recalculatePercentage();

    return this.percent;
  }

  @HostBinding('class.progress-bar') addClass = true;

  get isBs3(): boolean {
    return isBs3();
  }

  striped: boolean;
  animate: boolean;
  percent = 0;
  progress: ProgressbarComponent;

  protected _value: number;
  protected _type: string;
  private _prevType: string;

  constructor(
    private el: ElementRef,
    @Host() progress: ProgressbarComponent,
    private renderer: Renderer2
  ) {
    this.progress = progress;
  }

  ngOnInit(): void {
    this.progress.addBar(this);
  }

  ngOnDestroy(): void {
    this.progress.removeBar(this);
  }

  recalculatePercentage(): void {
    this.percent = +(this.value / this.progress.max * 100).toFixed(2);

    const totalPercentage = this.progress.bars
      .reduce(function (total: number, bar: BarComponent): number {
        return total + bar.percent;
      }, 0);

    if (totalPercentage > 100) {
      this.percent -= totalPercentage - 100;
    }
  }

  private applyTypeClasses(): void {
    if (this._prevType) {
      const barTypeClass = `progress-bar-${this._prevType}`;
      const bgClass = `bg-${this._prevType}`;
      this.renderer.removeClass(this.el.nativeElement, barTypeClass);
      this.renderer.removeClass(this.el.nativeElement, bgClass);
      this._prevType = null;
    }

    if (this._type) {
      const barTypeClass = `progress-bar-${this._type}`;
      const bgClass = `bg-${this._type}`;
      this.renderer.addClass(this.el.nativeElement, barTypeClass);
      this.renderer.addClass(this.el.nativeElement, bgClass);
      this._prevType = this._type;
    }
  }
}
