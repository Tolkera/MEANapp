import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { errorCodes } from '../common/error-map';

declare var window:any;

@Injectable()

export class NotifierService {
    constructor(public toastr: ToastsManager) {}

    showSuccess(message){
        this.toastr.success(message);
    }

    showError(code){
        let message = errorCodes[code];
        this.toastr.error(message);
    }
}
