import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexScreenComponent } from './hex-screen.component';

describe('HexScreenComponent', () => {
  let component: HexScreenComponent;
  let fixture: ComponentFixture<HexScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
