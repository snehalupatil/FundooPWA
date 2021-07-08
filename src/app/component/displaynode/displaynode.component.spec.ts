import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynodeComponent } from './displaynode.component';

describe('DisplaynodeComponent', () => {
  let component: DisplaynodeComponent;
  let fixture: ComponentFixture<DisplaynodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaynodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaynodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
