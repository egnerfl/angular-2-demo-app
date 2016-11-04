/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazyRouteComponent } from './lazy-route.component';

describe('LazyRouteComponent', () => {
  let component: LazyRouteComponent;
  let fixture: ComponentFixture<LazyRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
