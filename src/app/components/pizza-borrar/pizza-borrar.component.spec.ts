import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaBorrarComponent } from './pizza-borrar.component';

describe('PizzaBorrarComponent', () => {
  let component: PizzaBorrarComponent;
  let fixture: ComponentFixture<PizzaBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
