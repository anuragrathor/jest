import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent {



  compileAndroidcode(){
    throw new Error('You are using old angular');
  }

}
