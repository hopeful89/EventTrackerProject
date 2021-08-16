import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleappComponent } from './singleapp.component';

describe('SingleappComponent', () => {
  let component: SingleappComponent;
  let fixture: ComponentFixture<SingleappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
