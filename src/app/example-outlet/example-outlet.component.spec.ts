import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOutletComponent } from './example-outlet.component';

describe('ExampleOutletComponent', () => {
  let component: ExampleOutletComponent;
  let fixture: ComponentFixture<ExampleOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
