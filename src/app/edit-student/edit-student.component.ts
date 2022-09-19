import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentForm!: FormGroup;
  id: number = 0;

  constructor(private fb: FormBuilder,
    private route: Router,
    private studentService: StudentsService,
    private url: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName:  this.fb.control(null, Validators.required),
      email:     this.fb.control(null, Validators.required),
      password:  this.fb.control(null, Validators.required),
    });

    this.id = this.url.snapshot.params['id'];

    this.studentService.getStudent(this.id).subscribe((data: any) => {
      console.log("IDDDDDDDDDDDDDDDD = ", data);
      this.studentForm.patchValue(data);
    /*  this.studentForm = this.fb.group({
        firstName: this.fb.control(data.firstName, Validators.required),
        lastName:  this.fb.control(data.lastName, Validators.required),
        email:     this.fb.control(data.email, Validators.required),
        password:  this.fb.control(data.password, Validators.required)
      });*/
    });
  }

  public onSubmit(){

    this.studentService.updateStudent(this.studentForm.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/list-students']);
    });
  }
}
