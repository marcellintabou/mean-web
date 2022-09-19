import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any = [];
  constructor( private studentService: StudentsService,
               private router: Router) { }

  ngOnInit(): void {
    this.loadStudent();
  }

  public loadStudent(){
    this.studentService.listStudent().subscribe((data: any) => {
      this.students = data;
      console.log(this.students);
      this.router.navigate(['/list-students']);
    });
  }

  public deleteStudent(data:any){
    console.log(data);
    this.studentService.deleteStudent(data._id).subscribe((response: any) => { console.log(response.msg._id);
      this.students = this.students.filter((u:any) => u._id !== response.msg._id);
      console.log(this.students.length);
    });
  }
}
