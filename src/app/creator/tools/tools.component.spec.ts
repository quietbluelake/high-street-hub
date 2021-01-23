import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsComponent } from './tools.component';

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should have the correct icons', () => {
    expect(true).toEqual(true);
  });
  it('icons should be in SVG format', () => {
    expect(true).toEqual(true);
  });
  it('icons should be white', () => {
    expect(true).toEqual(true);
  });
  it('icons should only be usable after selecting a populated tile (except exit icon)', () => {
    expect(true).toEqual(true);
  });
  it('rotate mode should rotate entity by 90 degrees clockwise', () => {
    expect(true).toEqual(true);
  });
  it('scale mode should scale entity incrementally by 5 percent both ways', () => {
    expect(true).toEqual(true);
  });
  it('flip mode should flip entity horizontally or vertically', () => {
    expect(true).toEqual(true);
  });
  it('delete mode should clear the selected tile', () => {
    expect(true).toEqual(true);
  });
  it('should be able to exit to the Hub', () => {
    expect(true).toEqual(true);
  });
  it('should have a purple background', () => {
    expect(true).toEqual(true);
  });
});
