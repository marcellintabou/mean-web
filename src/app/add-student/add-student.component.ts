import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent: any;

  constructor(private fb: FormBuilder,
    private route: Router,
    private studentService: StudentsService) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.addStudent = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.studentService.addStudent(this.addStudent.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/list-students']);
    });
  }

}
