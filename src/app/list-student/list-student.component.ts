import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any;
  constructor( private studentService: StudentsService,
               private router: Router) { }

  ngOnInit(): void {
  }

  public loadStudent(){
    this.studentService.listStudent().subscribe((data: any) => {
      this.students = data;
      this.router.navigate(['/list-students']);
    });
  }

  public deleteStudent(data:any){
    this.studentService.deleteStudent(data.id).subscribe((data: any) => {
      //this.students = data;
      // this.router.navigate(['/list-students']);
      this.students = this.students.filter((u:any) => u !== data);
    });
  }
}
