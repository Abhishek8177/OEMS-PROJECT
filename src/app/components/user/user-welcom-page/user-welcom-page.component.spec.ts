import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWelcomPageComponent } from './user-welcom-page.component';

describe('UserWelcomPageComponent', () => {
  let component: UserWelcomPageComponent;
  let fixture: ComponentFixture<UserWelcomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWelcomPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWelcomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
