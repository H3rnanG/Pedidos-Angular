import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlatoComponent } from './form-plato.component';

describe('FormPlatoComponent', () => {
  let component: FormPlatoComponent;
  let fixture: ComponentFixture<FormPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
