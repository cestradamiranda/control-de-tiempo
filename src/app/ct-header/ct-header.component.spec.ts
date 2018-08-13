import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtHeaderComponent } from './ct-header.component';

describe('CtHeaderComponent', () => {
  let component: CtHeaderComponent;
  let fixture: ComponentFixture<CtHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
