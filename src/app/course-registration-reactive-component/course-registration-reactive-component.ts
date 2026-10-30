import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-registration-reactive-component',
  standalone: false,
  templateUrl: './course-registration-reactive-component.html',
  styleUrl: './course-registration-reactive-component.css',
})
export class CourseRegistrationReactiveComponent {
  public regForm: FormGroup = new FormGroup({
    name: new FormControl('Skibidi'),
    email: new FormControl('thembundau@gmail.com'),
    password: new FormControl(''),
    confirmPass: new FormControl(''),
  });

  setDefaultValues() {
    this.regForm.patchValue({
      name: 'Skibidi',
      email: 'thembundau@gmail.com'
    });
  }
}