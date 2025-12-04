import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleRules } from './style-rules';

describe('StyleRules', () => {
  let component: StyleRules;
  let fixture: ComponentFixture<StyleRules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleRules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleRules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
