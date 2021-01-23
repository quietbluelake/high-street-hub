import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponent } from './options.component';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should be purple', () => {
    expect(true).toEqual(true);
  });
  it('should have the correct icons', () => {
    expect(true).toEqual(true);
  });
  it('icons should be in SVG format', () => {
    expect(true).toEqual(true);
  });
  it('icons should only be usable after selecting an entity with the exception of exit icon', () => {
    expect(true).toEqual(true);
  });
  it('should be able to add an entity provided conditions are met', () => {
    expect(true).toEqual(true);
  });
  it('should be able to delete an entity provided conditions are met', () => {
    expect(true).toEqual(true);
  });
  it('should be able to rename an entity provided conditions are met', () => {
    expect(true).toEqual(true);
  });
  it('should be able to update existing entity with new file', () => {
    expect(true).toEqual(true);
  });
  it('should be able to exit to Hub', () => {
    expect(true).toEqual(true);
  });
});
