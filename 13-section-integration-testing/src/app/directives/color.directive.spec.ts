import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ColorDirective } from './color.directive';

@Component({
  template: `
    <p appColor="yellow">test text 1</p>
    <p appColor>test text 2</p>
  `
})
class HostComponent {}

describe('ColorDirective', () => {
  let debugElements: DebugElement[];
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective, HostComponent]
    });

    fixture = TestBed.createComponent(HostComponent);
    debugElements = fixture.debugElement.queryAll(By.directive(ColorDirective));
    fixture.detectChanges();
  });

  it('should inject "HighlightDirective" in the 1st <p>', () => {
    const directive = debugElements[0].injector.get(ColorDirective);

    expect(directive).toBeDefined();
  });

  it('should color 1st <p> background "yellow"', () => {
    expect(debugElements[0].nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should color 2sd <p> background with default color', () => {
    const directive = debugElements[1].injector.get(ColorDirective);

    expect(debugElements[1].nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
