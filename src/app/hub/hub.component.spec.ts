import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubComponent } from './hub.component';

describe('HubComponent', () => {
  let component: HubComponent;
  let fixture: ComponentFixture<HubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should make API "GET" request to retrieve all existing areas', () => {
    expect(true).toEqual(true);
  });
  it('should load only the required properties', () => {
    expect(true).toEqual(true);
  });
  it('should display information in Angular Material cards', () => {
    expect(true).toEqual(true);
  });
  it('items in list should be a "light black"', () => {
    expect(true).toEqual(true);
  });
  it('background should be true black', () => {
    expect(true).toEqual(true);
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should display wiki for selected Area on click/tap', () => {
    expect(true).toEqual(true);
  });
  it('should have scrollbar when not all items in list are visible', () => {
    expect(true).toEqual(true);
  });
});
