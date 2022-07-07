import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  toastRef: any;
  constructor(private quoteService: QuoteService, private toastr: ToastrService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }

  showNotify() {
    this.toastRef = this.toastr.success('The reboot request was unsuccessful', 'Device Unreachable', {
      disableTimeOut: true,
      tapToDismiss: false,
      positionClass: 'toast-top-right',
      toastClass: 'toast-icon custom-toast-success',
      //  timeOut:3000
    });
  }
}
