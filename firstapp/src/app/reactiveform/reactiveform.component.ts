import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, MinValidator, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Employee } from '../../Models/Employee';
import { createPasswordStrengthValidator, customValidator } from './customvalidator';

@Component({
  selector: 'app-reactiveform',
  
  templateUrl: './reactiveform.component.html',
})

 export class ReactiveformComponent {

  //dependency injection
  constructor(private fb: FormBuilder) {
    fb=new FormBuilder();
  }

  get email() {
      return this.form.controls['email'];
  }
  
  get password() {
      return this.form.controls['password'];
  }
  get salary(){
    return this.form.controls['salary'];
  }
  
  form = this.fb.group({
    email: [
      '', {
        validators: [
           Validators.required, 
           Validators.email
          
        ],
        updateOn: 'blur'
    }],
    password: [
        '', 
        [Validators.required, Validators.minLength(8),
         createPasswordStrengthValidator()
        ]
      ],
    salary: [
          '', 
          [Validators.required,
            Validators.min(5000),
            Validators.max(10000),
           customValidator()
          ],
    ]
 });

 onSubmit() {
  if (this.form.valid) {
    console.log('Form Submitted', this.form.value);
  } else {
    console.log('Form Invalid');
  }
}
  

  
}