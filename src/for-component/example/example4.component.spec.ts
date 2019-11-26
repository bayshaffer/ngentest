// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { InteractionsComponent } from './example4.component';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
class MockTranslateService {
  translate = jest.fn();
}

@Directive({ selector: '[oneviewPermitted]' }) // TODO, template must be user-configurable
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({name: 'translate'}) // TODO, template must be user-configurable
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'}) // TODO, template must be user-configurable
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'}) // TODO, template must be user-configurable
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('InteractionsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        InteractionsComponent, TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {url: 'url', params: {}, queryParams: {}, data: {}},
            url: observableOf('url'),
            params: observableOf({}),
            queryParams: observableOf({}),
            fragment: observableOf('fragment'),
            data: observableOf({})
          }
        },
        { provide: TranslateService, useClass: MockTranslateService }      ]
    }).overrideComponent(InteractionsComponent, {
      // set: { providers: [{ provide: MyComponentService, useClass: MyComponentService }] }
    }).compileComponents();
    fixture = TestBed.createComponent(InteractionsComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run GetterDeclaration #currentPage', async () => {

    const currentPage = component.currentPage;

  });

  it('should run SetterDeclaration #currentPage', async () => {

    component.currentPage = {};

  });

  it('should run #ngOnInit()', async () => {
    component.route = component.route || {};
    component.route.snapshot = {
      data: {
        'interactions': '[object Object]'
      }
    };
    component.getInteractions = jest.fn();
    component.interactions = component.interactions || {};
    component.interactions = component.interactions || {};
    component.interactions.map = jest.fn().mockReturnValue({
      filter : jest.fn()
    });
    component.ngOnInit();
    expect(component.getInteractions).toHaveBeenCalled();
    expect(component.interactions.map).toHaveBeenCalled();
  });

  it('should run #ngAfterViewInit()', async () => {

    component.ngAfterViewInit();

  });

  it('should run #applyFilter()', async () => {

    component.applyFilter({
      target: {
        value: '[object Object]'
      }
    });

  });

  it('should run #getInteractions()', async () => {
    component.translate = component.translate || {};
    component.translate.instant = jest.fn();
    component.getInteractions({
      error: '[object Object]',
      filter : jest.fn()
    });
    expect(component.translate.instant).toHaveBeenCalled();
  });

  it('should run #searchInteractions()', async () => {

    component.searchInteractions({});

  });

  it('should run #iconToShow()', async () => {

    component.iconToShow('itemType', 'media');

  });

});