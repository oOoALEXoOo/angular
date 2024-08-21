import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [provideRouter([])]
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have link to posts page', () => {
    const debugElements = fixture.debugElement.queryAll(By.css('[routerLink]'));
    const index = debugElements.findIndex((el) => el.attributes['routerLink'] === '/posts');

    expect(index).toBeGreaterThan(-1);
  });
});
