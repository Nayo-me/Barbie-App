import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingStoreComponent } from './clothing-store.component';

describe('ClothingStoreComponent', () => {
  let component: ClothingStoreComponent;
  let fixture: ComponentFixture<ClothingStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothingStoreComponent]
    });
    fixture = TestBed.createComponent(ClothingStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
