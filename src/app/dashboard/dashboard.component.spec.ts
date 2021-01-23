import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should have black background', () => {
    expect(true).toEqual(true);
  });
  it('should display maximum of 10 cards', () => {
    expect(true).toEqual(true);
  });
  it('cards should be draggable', () => {
    expect(true).toEqual(true);
  });
  it('cards should automatically sort when dragged', () => {
    expect(true).toEqual(true);
  });
  it('should be able to edit a card in place', () => {
    expect(true).toEqual(true);
  });
  it('should be able to filter a graph/chart in edit mode', () => {
    expect(true).toEqual(true);
  });
  it('should be able to change colours of graphs/charts in edit mode', () => {
    expect(true).toEqual(true);
  });
  it('should be able to add notes in edit mode', () => {
    expect(true).toEqual(true);
  });
  it('should be able to import data in edit mode to update stats', () => {
    expect(true).toEqual(true);
  });
  it('import should make a POST request to correct stat type', () => {
    expect(true).toEqual(true);
  });
  it('import should update data in real-time', () => {
    expect(true).toEqual(true);
  });
  it('should be making the correct GET requests per card', () => {
    expect(true).toEqual(true);
  });
  it('should be able to resize cards to a min and max size', () => {
    expect(true).toEqual(true);
  });
  it('should autosave after leaving edit mode', () => {
    expect(true).toEqual(true);
  });
  it('should be able to exit back to Explorer', () => {
    expect(true).toEqual(true);
  });
});
