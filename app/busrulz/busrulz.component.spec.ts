import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusrulzComponent } from './busrulz.component';

describe('BusrulzComponent', () => {
  let component: BusrulzComponent;
  let fixture: ComponentFixture<BusrulzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusrulzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusrulzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
