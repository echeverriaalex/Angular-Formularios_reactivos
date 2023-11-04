import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit{

  studentForm!: FormGroup;

  studentId!: Number;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  dni!: Number;
  address: string = "";

  message: string = "";

  constructor(){}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      'firstName': new FormControl(" ", [ 
          Validators.required, 
          Validators.minLength(2), 
          Validators.maxLength(20)
        ]),
      'lastName': new FormControl('', 
      [ 
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(30)
      ]),
      'email': new FormControl(''),
      'dni': new FormControl(''),
      'address': new FormControl('',
        [ 
          Validators.required, 
          Validators.minLength(6), 
          Validators.maxLength(20)
        ])
    })
    
  }

  onSubmit(){
    this.firstName = this.studentForm.get('firstName')?.value
    console.log(this.firstName);
    console.log('lastName ---> ' + this.studentForm.get('lastName'))
    console.log('email ---> '+ this.studentForm.get('email'));
    console.log('address ---> ' + this.studentForm.get('address'));
  }

  addStudent(){

  }

}
