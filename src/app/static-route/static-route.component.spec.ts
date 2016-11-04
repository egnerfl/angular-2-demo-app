/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StaticRouteComponent } from './static-route.component';

describe('StaticRouteComponent', () => {
  let component: StaticRouteComponent;
  let fixture: ComponentFixture<StaticRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
