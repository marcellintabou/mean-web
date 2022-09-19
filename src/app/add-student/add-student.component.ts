import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private route: Router,
    private studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName:  this.fb.control(null, Validators.required),
      email:     this.fb.control(null, Validators.required),
      password:  this.fb.control(null, Validators.required),
    });
  }

  public onSubmit(){
    console.log("clicked");

    this.studentService.addStudent(this.studentForm.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/list-students']);
    });
  }


}
