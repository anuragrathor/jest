import { Injectable } from '@angular/core';
import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {
  
  LoaderConfig: NgxUiLoaderConfig;

  constructor(private ngxService: NgxUiLoaderService) { 
    this.LoaderConfig = {
      "bgsColor": "#0a1541",
      "bgsOpacity": 0.5,
      "bgsPosition": "bottom-right",
      "bgsSize": 60,
      "bgsType": "ball-spin-clockwise",
      "blur": 5,
      "delay": 0,
      "fastFadeOut": true,
      "fgsColor": "#0a1541",
      "fgsPosition": "center-center",
      "fgsSize": 60,
      "fgsType": "three-strings",
      "gap": 24,
      "logoPosition": "center-center",
      "logoSize": 120,
      "logoUrl": "",
      "masterLoaderId": "master",
      "overlayBorderRadius": "0",
      "overlayColor": "rgba(40, 40, 40, 0.8)",
      "pbColor": "#0a1541",
      "pbDirection": "ltr",
      "pbThickness": 3,
      "hasProgressBar": true,
      "text": "",
      "textColor": "#FFFFFF",
      "textPosition": "center-center",
      "maxTime": -1,
      "minTime": 300
    };

  }


  loaderToggle(flag:any){
    if(flag){
      this.ngxService.start(); 
    }else{
      this.ngxService.stop(); 
    }
  }

  /**
   * this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);

    // OR
    this.ngxService.startBackground("do-background-things");
    // Do something here...
    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 5000);
   */

  
}
