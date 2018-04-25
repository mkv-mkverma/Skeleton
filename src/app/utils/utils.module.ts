import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service
import { HttpService } from '../utils/services/http.service';

import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { TitleCasePipe } from './pipes/title-case.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DatePipe } from './pipes/date.pipe';

export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  // List of modules to import into this module.
  // Everything from the imported modules is available to declarations of this module
  imports: [
    CommonModule
  ],
  // List of components, directives, and pipes
  // visible to modules that import this module.
  exports: [
    CommonModule,
    TitleCasePipe,
    CapitalizePipe,
    DatePipe
  ],
  // List of dependency injection providers visible both to the contents of this module
  // and to importers of this module.
  providers: [HttpService, {
    provide: HttpService,
    useFactory: httpServiceFactory,
    deps: [XHRBackend, RequestOptions]
  }],
  // List of components, directives, and pipes that belong to this module.
  declarations: [TitleCasePipe, CapitalizePipe, DatePipe]
})
export class UtilsModule { }
