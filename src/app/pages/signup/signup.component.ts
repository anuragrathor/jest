import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/_model/city';
import { Country } from 'src/app/_model/country';
import { State } from 'src/app/_model/state';
import { CountrystatecityService } from 'src/app/appServices/countrystatecity/countrystatecity.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registrationForm!: FormGroup;

  listCountry!: Country[];
  selectcountry!: string;
  listState!: State[];
  selectstate!: string;
  listCity!: City[];
  selectcity!: string;



  constructor(private fb: FormBuilder, private CountrystatecityService: CountrystatecityService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      gender : ['', Validators.required],
      mobile : ['', Validators.required],
      address : this.fb.group({
        country : [''],
        state : [''],
        city : ['']
      })
    });
    
    this.registrationForm.valueChanges.subscribe((value) => {
      console.log('value changes', value);
    });


    //Fetch Country List on Load
    this.fetchCountry();
    
   

  }


//Fetch Country List 
  fetchCountry(){
    this.CountrystatecityService.getCountry().subscribe(data => {
      this.listCountry = data;

    });
  }

//Fetch State List 
  onCountrySelected(countryIso:string){
    this.CountrystatecityService.getStateOfSelectedCountry(countryIso).subscribe(data => {
      this.listState = data;
    });
  }


  //Fetch City List 
  // onStateSelected(countryIso = this.countrySelected ,stateIso = stateSelected){
  onStateSelected(countryIso = this.selectcountry,stateIso = this.selectstate){
    this.CountrystatecityService.getCityOfSelectedState(countryIso,stateIso).subscribe(data => {
      this.listCity = data;
    });
  }



  getControl(controlName: string) : FormControl {
    return this.registrationForm.get(controlName) as FormControl;
  }


  registration(){
    if(this.registrationForm.valid){
     //console.log('Form Values are as follows'+this.registrationForm.value);
      //this.registrationForm.markAsPristine();
      //this.registrationForm.markAsUntouched();
      //this.registrationForm.reset();   
    }else{
      alert('something error');
    }
  }

 

  resetForm(){
    this.registrationForm.reset();
  }

  

  


}
