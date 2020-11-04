import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefComponent } from './templateref.component';

describe('TemplaterefComponent', () => {
  let component: TemplaterefComponent;
  let fixture: ComponentFixture<TemplaterefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplaterefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
