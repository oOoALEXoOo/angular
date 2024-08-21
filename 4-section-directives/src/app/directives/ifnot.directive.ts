import {
  Directive, Input, TemplateRef, ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {
  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<never>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
