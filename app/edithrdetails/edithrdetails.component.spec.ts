import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithrdetailsComponent } from './edithrdetails.component';

describe('EdithrdetailsComponent', () => {
  let component: EdithrdetailsComponent;
  let fixture: ComponentFixture<EdithrdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithrdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
