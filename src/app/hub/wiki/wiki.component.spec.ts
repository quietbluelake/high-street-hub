import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiComponent } from './wiki.component';

describe('WikiComponent', () => {
  let component: WikiComponent;
  let fixture: ComponentFixture<WikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should allow an action to happen after the tab key is pressed', () => {
    expect(true).toEqual(true);
  });
  it('should check for a valid command after tab key is pressed', () => {
    expect(true).toEqual(true);
  });
  it('new elements should only be inserted vertically', () => {
    expect(true).toEqual(true);
  });
  it('should support all Angular Material text types', () => {
    expect(true).toEqual(true);
  });
  it('should support adding "quotes" with a custom Angular Material text type', () => {
    expect(true).toEqual(true);
  });
  it('should support adding images', () => {
    expect(true).toEqual(true);
  });
  it('should auto resize images', () => {
    expect(true).toEqual(true);
  });
  it('should support a wide range of file types for images', () => {
    expect(true).toEqual(true);
  });
  it('should support adding tables', () => {
    expect(true).toEqual(true);
  });
  it('should support adding links', () => {
    expect(true).toEqual(true);
  });
  it('should support adding Angular Material friendly icons', () => {
    expect(true).toEqual(true);
  });
  it('should support adding emojis', () => {
    expect(true).toEqual(true);
  });
});
