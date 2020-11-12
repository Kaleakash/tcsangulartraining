import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRetrieveByIdComponent } from './product-retrieve-by-id.component';

describe('ProductRetrieveByIdComponent', () => {
  let component: ProductRetrieveByIdComponent;
  let fixture: ComponentFixture<ProductRetrieveByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRetrieveByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRetrieveByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
