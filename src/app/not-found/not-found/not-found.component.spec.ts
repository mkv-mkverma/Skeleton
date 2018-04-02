import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { NotFoundComponent } from './not-found.component';

// Import RouterTestingModule to resolve Can't bind to 'routerLink' since ...
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NotFoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
