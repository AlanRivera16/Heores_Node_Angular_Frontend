import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAComponent } from './heroes-a.component';

describe('HeroesAComponent', () => {
  let component: HeroesAComponent;
  let fixture: ComponentFixture<HeroesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
