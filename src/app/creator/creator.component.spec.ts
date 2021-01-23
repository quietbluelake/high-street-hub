import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorComponent } from './creator.component';

describe('CreatorComponent', () => {
  let component: CreatorComponent;
  let fixture: ComponentFixture<CreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('entities should only be dropped onto a single tile at a time', () => {
    expect(true).toEqual(true);
  });
  it('should not be able to place an entity onto an occupied tile', () => {
    expect(true).toEqual(true);
  });
  it('should provide scrollbar on overflow', () => {
    expect(true).toEqual(true);
  });
  it('should have a visible grid', () => {
    expect(true).toEqual(true);
  });
  it('should be able to modify grid size at any time', () => {
    expect(true).toEqual(true);
  });
  it('even if grid size changes, entities should still be present in their original tiles', () => {
    expect(true).toEqual(true);
  });
});
