import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPlatoPedidoComponent } from './index-plato-pedido.component';

describe('IndexPlatoPedidoComponent', () => {
  let component: IndexPlatoPedidoComponent;
  let fixture: ComponentFixture<IndexPlatoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPlatoPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexPlatoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
