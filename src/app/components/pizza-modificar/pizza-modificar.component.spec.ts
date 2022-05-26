import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaModificarComponent } from './pizza-modificar.component';

describe('PizzaModificarComponent', () => {
  let component: PizzaModificarComponent;
  let fixture: ComponentFixture<PizzaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
