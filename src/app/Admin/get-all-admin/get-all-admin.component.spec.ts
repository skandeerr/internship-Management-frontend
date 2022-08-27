import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAdminComponent } from './get-all-admin.component';

describe('GetAllAdminComponent', () => {
  let component: GetAllAdminComponent;
  let fixture: ComponentFixture<GetAllAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
