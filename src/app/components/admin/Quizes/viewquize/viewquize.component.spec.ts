import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizeComponent } from './viewquize.component';

describe('ViewquizeComponent', () => {
  let component: ViewquizeComponent;
  let fixture: ComponentFixture<ViewquizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewquizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
