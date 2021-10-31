import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsGifsComponent } from './results-gifs.component';

describe('ResultsGifsComponent', () => {
  let component: ResultsGifsComponent;
  let fixture: ComponentFixture<ResultsGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
