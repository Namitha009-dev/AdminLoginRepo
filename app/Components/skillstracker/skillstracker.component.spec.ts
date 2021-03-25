import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillstrackerComponent } from './skillstracker.component';

describe('SkillstrackerComponent', () => {
  let component: SkillstrackerComponent;
  let fixture: ComponentFixture<SkillstrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillstrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillstrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
