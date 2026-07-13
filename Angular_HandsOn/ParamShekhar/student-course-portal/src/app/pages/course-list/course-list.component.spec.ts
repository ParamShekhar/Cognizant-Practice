import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' as const },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'pending' as const }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideRouter([]),
        provideMockStore({ initialState: { course: { courses: mockCourses, loading: false, error: null } } })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the loading indicator when loading is true', () => {
    store.setState({ course: { courses: [], loading: true, error: null } });
    fixture.detectChanges();
    const loadingEl = fixture.nativeElement.querySelector('p');
    expect(loadingEl.textContent).toContain('Loading');
  });
});
