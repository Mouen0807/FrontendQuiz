import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCategoryComponent } from './description-category.component';

describe('DescriptionCategoryComponent', () => {
  let component: DescriptionCategoryComponent;
  let fixture: ComponentFixture<DescriptionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
