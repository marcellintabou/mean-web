import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public host = 'http://localhost:8080';
  public path = '/students';
  constructor(private http: HttpClient) { }

  public addStudent(student: any){
    return this.http.post(this.host + this.path, student);
  }

  public getStudent(id: number){
    return this.http.get(this.host + this.path + '/' + id);
  }

  public listStudent(){
    return this.http.get(this.host + this.path);
  }

  public deleteStudent(id: number){
    return this.http.delete(this.host + this.path + '/' + id);
  }

  public updateStudent(student: any){
    return this.http.put(this.host + this.path + '/' + student.id, student);
  }
}

