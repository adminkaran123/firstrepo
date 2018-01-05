import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelibaryComponent } from './codelibary.component';

describe('CodelibaryComponent', () => {
  let component: CodelibaryComponent;
  let fixture: ComponentFixture<CodelibaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelibaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelibaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
