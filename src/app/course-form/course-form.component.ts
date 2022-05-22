import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{
  categories= [
    {id: 1, cat: "Development"},
    {id: 2, cat: "Art"},
    {id: 3, cat: "Languages"}
  
  ]

  submit(f:any){
    console.log(f);
  }
}
