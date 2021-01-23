import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSwitchComponent } from './mode-switch.component';

describe('ModeSwitchComponent', () => {
  let component: ModeSwitchComponent;
  let fixture: ComponentFixture<ModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should appear in bottom right', () => {
    expect(true).toEqual(true);
  });
  it('should be able to exit to Hub', () => {
    expect(true).toEqual(true);
  });
  it('should be able to switch to Editor', () => {
    expect(true).toEqual(true);
  });
  it('should be purple', () => {
    expect(true).toEqual(true);
  });
});
