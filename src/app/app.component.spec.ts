import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
// Import RouterTestingModule to resolve Can't bind to 'routerLink' since ...
import { RouterTestingModule } from '@angular/router/testing';

// declare customPipe to resolve pipe error
import { CapitalizePipe } from './utils/pipes/capitalize.pipe';

fdescribe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [],
      declarations: [
        AppComponent, CapitalizePipe
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to App!');
  }));
});
