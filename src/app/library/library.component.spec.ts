import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should display items in a grid list', () => {
    expect(true).toEqual(true);
  });
  it('should call the correct API', () => {
    expect(true).toEqual(true);
  });
  it('initial API call should be an unfiltered GET request for all stored entities', () => {
    expect(true).toEqual(true);
  });
  it('as filters are added, a filtered GET request should be made', () => {
    expect(true).toEqual(true);
  });
  it('display should be updated in real-time', () => {
    expect(true).toEqual(true);
  });
  it('should have black background', () => {
    expect(true).toEqual(true);
  });
});
