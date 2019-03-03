import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomplotComponent } from './customplot.component';

describe('CustomplotComponent', () => {
  let component: CustomplotComponent;
  let fixture: ComponentFixture<CustomplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
