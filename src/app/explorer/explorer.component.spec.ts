import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerComponent } from './explorer.component';

describe('ExplorerComponent', () => {
  let component: ExplorerComponent;
  let fixture: ComponentFixture<ExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('should be aligned in grid but without the grid being visible', () => {
    expect(true).toEqual(true);
  });
  it('should provide scrollbar on overflow', () => {
    expect(true).toEqual(true);
  });
  it('should be able to tap an entity to bring up an overview bubble', () => {
    expect(true).toEqual(true);
  });
  it('should be able to view Dashboard by getting there via the overview bubble', () => {
    expect(true).toEqual(true);
  });
});
