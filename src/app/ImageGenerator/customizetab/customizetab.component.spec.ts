import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizetabComponent } from './customizetab.component';

describe('CustomizetabComponent', () => {
  let component: CustomizetabComponent;
  let fixture: ComponentFixture<CustomizetabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizetabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
