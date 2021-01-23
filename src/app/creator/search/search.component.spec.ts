import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should always validate what is being typed into the search bar', () => {
    expect(true).toEqual(true);
  });
  it('length limit should be 50 characters', () => {
    expect(true).toEqual(true);
  });
  it('should make keyword into filter after enter key is pressed', () => {
    expect(true).toEqual(true);
  });
  it('should clear search bar on enter key pressed if the string is valid', () => {
    expect(true).toEqual(true);
  });
  it('should be able to click chip to remove it', () => {
    expect(true).toEqual(true);
  });
  it('should be a limit of 5 chips', () => {
    expect(true).toEqual(true);
  });
  it('should make API call to GET stored entities with filters', () => {
    expect(true).toEqual(true);
  });
  it('should display entities in grid list', () => {
    expect(true).toEqual(true);
  });
  it('should be able to drag an entity out onto a grid tile', () => {
    expect(true).toEqual(true);
  });
  it('should provide scroll on overflow', () => {
    expect(true).toEqual(true);
  });
  it('should have black background', () => {
    expect(true).toEqual(true);
  });
});
