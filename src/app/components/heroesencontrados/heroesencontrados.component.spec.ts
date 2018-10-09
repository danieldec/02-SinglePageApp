import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesencontradosComponent } from './heroesencontrados.component';

describe('HeroesencontradosComponent', () => {
  let component: HeroesencontradosComponent;
  let fixture: ComponentFixture<HeroesencontradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesencontradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesencontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
