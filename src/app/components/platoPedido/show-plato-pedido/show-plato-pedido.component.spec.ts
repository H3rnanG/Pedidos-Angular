import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlatoPedidoComponent } from './show-plato-pedido.component';

describe('ShowPlatoPedidoComponent', () => {
  let component: ShowPlatoPedidoComponent;
  let fixture: ComponentFixture<ShowPlatoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPlatoPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPlatoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
