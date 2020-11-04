import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdformComponent } from './mdform.component';

describe('MdformComponent', () => {
  let component: MdformComponent;
  let fixture: ComponentFixture<MdformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
