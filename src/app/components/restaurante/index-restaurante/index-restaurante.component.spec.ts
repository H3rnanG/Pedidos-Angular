import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRestauranteComponent } from './index-restaurante.component';

describe('IndexRestauranteComponent', () => {
  let component: IndexRestauranteComponent;
  let fixture: ComponentFixture<IndexRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexRestauranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
