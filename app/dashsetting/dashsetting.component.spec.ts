import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashsettingComponent } from './dashsetting.component';

describe('DashsettingComponent', () => {
  let component: DashsettingComponent;
  let fixture: ComponentFixture<DashsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
