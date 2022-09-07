import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  addStudent: any;
  id: number = 0;

  constructor(private fb: FormBuilder,
    private route: Router,
    private studentService: StudentsService,
    private url: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.url.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe((data: any) => {
      this.addStudent.patchValue(data);
    });
  }

  public onSubmit(){
    this.addStudent = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.studentService.updateStudent(this.addStudent.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/list-students']);
    });
  }
}
