import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCmp } from './study-cmp';

describe('StudyCmp', () => {
  let component: StudyCmp;
  let fixture: ComponentFixture<StudyCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyCmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
