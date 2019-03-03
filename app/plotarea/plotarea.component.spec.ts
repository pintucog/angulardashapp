import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotareaComponent } from './plotarea.component';

describe('PlotareaComponent', () => {
  let component: PlotareaComponent;
  let fixture: ComponentFixture<PlotareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
