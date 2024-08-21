import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = '';
  @Input() dStyles: { border?: string, borderRadius?: string, fontWeight?: string };

  @HostBinding('style.color') elColor: any = null;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.elColor = this.color;
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elColor = null;
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null);
  }
}
