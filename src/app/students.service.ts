import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public host = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  public addStudent(student: any){
    return this.http.post(this.host + '/students', student);
  }

  public getStudent(id: number){
    return this.http.get(this.host + '/students/' + id);
  }

  public listStudent(){
    return this.http.get(this.host + '/students');
  }

  public deleteStudent(id: number){
    return this.http.delete(this.host + '/students/' + id);
  }

  public updateStudent(student: any){
    return this.http.put(this.host + '/students/' + student.id, student);
  }
}

