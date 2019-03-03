import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowstatsComponent } from './rowstats.component';

describe('RowstatsComponent', () => {
  let component: RowstatsComponent;
  let fixture: ComponentFixture<RowstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
