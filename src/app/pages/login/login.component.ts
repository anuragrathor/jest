import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/appServices/api/api-service.service';
import { LoaderServiceService } from 'src/app/appServices/loader/loader-service.service';
import { ToasterServiceService } from 'src/app/appServices/toaster/toaster-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private loader: LoaderServiceService,private apiService:ApiServiceService,private toaster: ToasterServiceService,private fb: FormBuilder) {
    //loader.loaderToggle(true);
    //toaster.showSuccess('Welcome dear Anurag');
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(20)
                      ]
                ],
    }); 

 }

  //Provide Form Control to this f  
  get f(){
    return this.loginForm.controls;
  }

 onSubmit() {
    this.submitted = true;
    
    if (this.loginForm.valid) {
      let params = this.loginForm.value;

      this.apiService.post('api/auth/login', params).subscribe((res: any) => {
        if (res.type == 'Success') {
          this.submitted = false;      
          this.toaster.showSuccess(res.message);
          
          localStorage.setItem('userdetail', JSON.stringify({
            'token': res.tokens.accessToken,
            'name': res.user.name,
            'username' : res.user.username
          }));

          
          this.apiService.goTo('home');

          //console.log(localStorage.getItem('userdetail'));

        } else {
          this.toaster.showError(res.message)
        }
      }, error => {
        this.toaster.showError(error.error.message)
      });
    } else {
      this.toaster.showError('Please fill the form Proper')
    }
    
    console.log(this.loginForm.value);
 }





}
