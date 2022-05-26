import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepartidorPaisComponent } from './detalle-repartidor-pais.component';

describe('DetalleRepartidorPaisComponent', () => {
  let component: DetalleRepartidorPaisComponent;
  let fixture: ComponentFixture<DetalleRepartidorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRepartidorPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRepartidorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
