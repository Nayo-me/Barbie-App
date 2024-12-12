import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesStoreComponent } from './accessories-store.component';

describe('AccessoriesStoreComponent', () => {
  let component: AccessoriesStoreComponent;
  let fixture: ComponentFixture<AccessoriesStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoriesStoreComponent]
    });
    fixture = TestBed.createComponent(AccessoriesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
