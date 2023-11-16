import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlatoPedidoComponent } from './form-plato-pedido.component';

describe('FormPlatoPedidoComponent', () => {
  let component: FormPlatoPedidoComponent;
  let fixture: ComponentFixture<FormPlatoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlatoPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPlatoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
