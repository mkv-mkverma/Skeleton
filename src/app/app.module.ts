/**
 * Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires.
 *
 * This information is called metadata.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

/**
 * For Handling error and displaying in console
 *
 * url: https://www.npmjs.com/package/ngx-logger
 */
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

/**
 * For Hanldling Local and session Storage
 *
 * url: https://www.npmjs.com/package/ngx-webstorage#modifBuild
 */
import { Ng2Webstorage } from 'ngx-webstorage';

// import this to resolve StaticInjectorError
import { UtilsModule } from './utils/index';

@NgModule({
  // List of components, directives, and pipes that belong to this module.
  declarations: [
    AppComponent,
  ],
  // List of modules to import into this module.
  // Everything from the imported modules is available to declarations of this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    UtilsModule,
    Ng2Webstorage,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  // List of dependency injection providers visible both to the contents of this module
  // and to importers of this module.
  providers: [AppService],
  // List of components to bootstrap when this module is bootstrapped.
  bootstrap: [AppComponent]
})
export class AppModule { }
