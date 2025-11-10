import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestColors } from './test-colors';

describe('TestColors', () => {
  let component: TestColors;
  let fixture: ComponentFixture<TestColors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestColors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestColors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
