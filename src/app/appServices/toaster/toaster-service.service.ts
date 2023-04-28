import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  /** Add Toaster Css in angular.json file "styles": ["src/styles.css","node_modules/ngx-toastr/toastr.css"] */

  constructor(private toastr: ToastrService) { }

  showSuccess(message:any) {
    this.toastr.success(message);
  }

  showError(message:any) {
    this.toastr.error(message);
  }

  showInfo(message:any) {
    this.toastr.info(message);
  }

  showWarning(message:any) {
    this.toastr.warning(message);
  }

}
