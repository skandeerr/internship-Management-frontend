import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPostulerComponent } from './projet-postuler.component';

describe('ProjetPostulerComponent', () => {
  let component: ProjetPostulerComponent;
  let fixture: ComponentFixture<ProjetPostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetPostulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetPostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
