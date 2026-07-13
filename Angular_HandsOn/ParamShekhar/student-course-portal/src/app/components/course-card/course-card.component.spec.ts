import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  const mockCourse: Course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course name', () => {
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested with the course id on enroll click', () => {
    spyOn(component.enrollRequested, 'emit');
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    enrollButton.click();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });
});
