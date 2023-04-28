import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ 
     selector: '[cpDefaultTheme]' 
})
export class CPDefaultThemeDirective implements AfterViewInit {
    constructor(private elRef: ElementRef) {
    }
    ngAfterViewInit(): void {
       this.elRef.nativeElement.style.color = 'blue';
       this.elRef.nativeElement.style.fontSize = '20px';
    }		
} 



/**Example to use this custom directive:
 * creating a simple attribute directive that will change color and font size of a HTML element.
*<p cpDefaultTheme> Anurag Rathore</p> 
 */