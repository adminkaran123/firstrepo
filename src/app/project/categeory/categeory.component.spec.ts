import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategeoryComponent } from './categeory.component';

describe('CategeoryComponent', () => {
  let component: CategeoryComponent;
  let fixture: ComponentFixture<CategeoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategeoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
