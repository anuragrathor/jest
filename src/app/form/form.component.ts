import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fname : ['', Validators.required],
      lname : ['', Validators.required],
      address : this.fb.group({
        country : [''],
        state : [''],
        city : ['']
      }),
      hobbies: this.fb.array([])
    });
    
    this.registrationForm.valueChanges.subscribe((value) => {
      console.log('value changes', value);
    });
  }
  

  
  get hobbies() {
    return this.registrationForm.get('hobbies') as FormArray;
  }

  addHobbies() {
    this.hobbies.push(this.fb.control(''));
  }

  getControl(controlName: string) : FormControl {
    return this.registrationForm.get(controlName) as FormControl;
  }

  registration(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value);
      this.registrationForm.markAsPristine();
      this.registrationForm.markAsUntouched();
      this.registrationForm.reset();   
    }else{
      alert('something error');
    }
  }

  updateProfile() {
    this.registrationForm.patchValue({
      fname: 'Nancy',
      address: {
        country: '123 Drew Street'
      }
    });
  }

  resetForm(){
    this.registrationForm.reset();
  }



}
