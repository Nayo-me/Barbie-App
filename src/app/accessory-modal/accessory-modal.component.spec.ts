import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryModalComponent } from './accessory-modal.component';

describe('AccessoryModalComponent', () => {
  let component: AccessoryModalComponent;
  let fixture: ComponentFixture<AccessoryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoryModalComponent]
    });
    fixture = TestBed.createComponent(AccessoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
