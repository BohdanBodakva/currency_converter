import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertItemComponent } from './convert-item.component';

describe('ConvertItemComponent', () => {
  let component: ConvertItemComponent;
  let fixture: ComponentFixture<ConvertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
