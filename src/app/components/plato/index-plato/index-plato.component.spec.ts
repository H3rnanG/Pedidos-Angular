import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPlatoComponent } from './index-plato.component';

describe('IndexPlatoComponent', () => {
  let component: IndexPlatoComponent;
  let fixture: ComponentFixture<IndexPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPlatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
