import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component
import { Skeleton1DetailsComponent } from './skeleton1-details.component';
// Service
import { Skeleton1DetailsService } from '../skeleton1-details.service';
import { LocalStorageService } from 'ngx-webstorage';

fdescribe('Skeleton1DetailsComponent', () => {
  let component: Skeleton1DetailsComponent;
  let fixture: ComponentFixture<Skeleton1DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService, Skeleton1DetailsService],
      declarations: [ Skeleton1DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skeleton1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
