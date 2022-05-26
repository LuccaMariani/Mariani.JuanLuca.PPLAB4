import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCrearComponent } from './pizza-crear.component';

describe('PizzaCrearComponent', () => {
  let component: PizzaCrearComponent;
  let fixture: ComponentFixture<PizzaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
