/**
 * The goal is to test pieces of code in isolation without needing to know about the inner workings of their dependencies.
 * We do this by creating Mocks; we can create Mocks using fake classes, extending existing classes or
 * by using real instances of classes but taking control of them with Spys.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'ngx-webstorage';
import { NGXLogger } from 'ngx-logger';

import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// component
import { Skeleton2DetailsComponent } from './skeleton2-details.component';

// service
import { HttpService } from '../../utils/services/http.service';
import { Skeleton2DetailsService } from '../skeleton2-details.service';

// Module
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Skeleton2RoutingModule } from '../skeleton2-routing.module';
// Import utilsModule for custom pipe
import { UtilsModule } from '../../utils';

// Import the HttpModule and provide ConnectionBackend to resolve StaticInjectorError
import { HttpModule, ConnectionBackend } from '@angular/http';
// Import the HttpClientModule to resolve StaticInjectorError for NGXLogger
import { HttpClientModule } from '@angular/common/http';

// You can disable tests without commenting them our by just pre-pending x to the describe or it functions
// Conversely you can also focus on specific tests by pre-pending with f
// The describe(string, function) function defines what we call a Test Suite, a collection of individual Test Specs.
fdescribe('Skeleton2DetailsComponent', () => {

  let component: Skeleton2DetailsComponent;

  let skeleton2service: Skeleton2DetailsService;

  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<Skeleton2DetailsComponent>;

  let saveEl: DebugElement;
  let attributeEl: DebugElement;

  beforeEach(async(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        Skeleton2RoutingModule,
        UtilsModule,
        HttpClientModule
      ],
      providers: [
        Skeleton2DetailsService,
        // {provide: Skeleton2DetailsService, useValue: skeleton2DetailsServiceStub },
        NGXLogger,
        LocalStorageService,
        HttpService,
        ConnectionBackend,
      ],
      declarations: [Skeleton2DetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(Skeleton2DetailsComponent);
    // UserService provided to the TestBed (get resolve dependencies)
    skeleton2service = TestBed.get(Skeleton2DetailsService);
    // get test component from the fixture
    component = fixture.componentInstance;
    saveEl = fixture.debugElement.query(By.css('button'));
    attributeEl = fixture.debugElement.query(By.css('input[name="attribute"]'));
    // To trigger change detection we call the function fixture.detectChanges()
    fixture.detectChanges();
  });

  // it('should not have title message after construction', () => {
  //   expect(component.title).toBeUndefined();
  // });

  // The it(string, function) function defines an individual Test Spec, this contains one or more Test Expectations.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('Entering attribute and saving', () => {
    // let user: User;
    // loginEl.nativeElement.value = "test@example.com";
    attributeEl.nativeElement.value = "Manish Verma";
    component.saveValue();
    // Subscribe to the Observable and store the user in a local variable.
    // component.loggedIn.subscribe((value) => user = value);

    // This sync emits the event and the subscribe callback gets executed above
    // saveEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Now we can check to make sure the emitted value is correct
    expect(component.boundAttribute).toBe("Manish Verma");
  });*/

  it('should have <p> with "skeleton2 details works!"', () => {

    // component.attribute = 'your message';
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('p'));
    const pr: HTMLElement = paragraphDe.nativeElement;
    expect(pr.textContent).not.toEqual(component.title);
    expect(pr.textContent).toEqual('Skeleton2 Details Works!');

    // same as above
    // const bannerDe: DebugElement = fixture.debugElement;
    // const bannerElement: HTMLElement = fixture.nativeElement;
    // const p = bannerElement.querySelector('p');
    // expect(p.textContent).toEqual('skeleton2 details works!');
  });

  it('should clear message', () => {
    component.clearItem();
    expect(component.boundAttribute).toBe(null);
  });

  /**
   * Dummy login methods Test
   */
  /**
   * A Spy is a feature of Jasmine which lets you take an existing class, function, object and
   * mock it in such a way that you can control what gets returned from functions.
   */
  it('needsLogin returns false when the user is not authenticated', () => {
    // By using the spy feature of jasmine we can make any function return anything we want
    spyOn(skeleton2service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(skeleton2service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user is not authenticated', () => {
    // By using the spy feature of jasmine we can make any function return anything we want
    spyOn(skeleton2service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(skeleton2service.isAuthenticated).toHaveBeenCalled();
  });
});
