import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableHexScreenComponent } from './clickable-hex-screen.component';

describe('ClickableHexScreenComponent', () => {
  let component: ClickableHexScreenComponent;
  let fixture: ComponentFixture<ClickableHexScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickableHexScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableHexScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
