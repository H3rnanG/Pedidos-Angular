import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlatoComponent } from './show-plato.component';

describe('ShowPlatoComponent', () => {
  let component: ShowPlatoComponent;
  let fixture: ComponentFixture<ShowPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPlatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
