import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothModalComponent } from './cloth-modal.component';

describe('ClothModalComponent', () => {
  let component: ClothModalComponent;
  let fixture: ComponentFixture<ClothModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothModalComponent]
    });
    fixture = TestBed.createComponent(ClothModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
