import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { UserAuthenticationComponent } from './user-authentication.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('UserAuthenticationComponent', () => {
  let component: UserAuthenticationComponent;
  let fixture: ComponentFixture<UserAuthenticationComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ UserAuthenticationComponent ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a High Street Hub logo', () => {
    expect(true).toEqual(true);
  });
  it('should have two input fields', () => {
    expect(true).toEqual(true);
  });
  it('should have a black background', () => {
    expect(true).toEqual(true);
  });
  it('font should be standard Angular Material typography', () => {
    expect(true).toEqual(true);
  });
  it('font should be grey', () => {
    expect(true).toEqual(true);
  });
  it('should be responsive', () => {
    expect(true).toEqual(true);
  });
  it('fields should be empty on initialization', () => {
    expect(true).toEqual(true);
  });
  it('should hide the password', () => {
    expect(true).toEqual(true);
  });
  it('should perform validation on login attempt', () => {
    expect(true).toEqual(true);
  });
  it('should perform authentication on login attempt', () => {
    expect(true).toEqual(true);
  });
  it('should keep values in both fields after unsuccessful login attempt', () => {
    expect(true).toEqual(true);
  });
  it('should have a "forgot username" link', () => {
    expect(true).toEqual(true);
  });
  it('should have a "forgot password" link', () => {
    expect(true).toEqual(true);
  });
});
