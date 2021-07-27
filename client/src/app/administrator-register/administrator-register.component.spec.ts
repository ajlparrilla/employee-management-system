import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorRegisterComponent } from './administrator-register.component';

describe('AdministratorRegisterComponent', () => {
  let component: AdministratorRegisterComponent;
  let fixture: ComponentFixture<AdministratorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
