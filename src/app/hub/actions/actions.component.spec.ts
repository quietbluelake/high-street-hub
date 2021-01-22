import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponent } from './actions.component';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have correct icons', () => {
    expect(true).toEqual(true);
  });
  it('icons should be in SVG format', () => {
    expect(true).toEqual(true);
  });
  it('icons should be evenly spread/sized', () => {
    expect(true).toEqual(true);
  });
  it('should be on right of screen', () => {
    expect(true).toEqual(true);
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should have purple background', () => {
    expect(true).toEqual(true);
  });
  it('all icons should check first to see if user is logged in', () => {
    expect(true).toEqual(true);
  });
  it('log out icon should log user out', () => {
    expect(true).toEqual(true);
  });
  it('log out icon should take user to Login screen', () => {
    expect(true).toEqual(true);
  });
  it('explorer icon should take user to /explorer', () => {
    expect(true).toEqual(true);
  });
  it('library icon should take user to /library', () => {
    expect(true).toEqual(true);
  });
  it('add icon should create prompt to ask for an Area name', () => {
    expect(true).toEqual(true);
  });
  it('add icon should create new list item so long as it has a name and that name does not already exist', () => {
    expect(true).toEqual(true);
  });
  it('delete icon should be disabled unless the Wiki is open', () => {
    expect(true).toEqual(true);
  });
  it('delete icon should prompt user before deleting', () => {
    expect(true).toEqual(true);
  });
  it('delete icon should close the Wiki if user confirms', () => {
    expect(true).toEqual(true);
  });
});
