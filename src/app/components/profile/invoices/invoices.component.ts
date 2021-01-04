import { Component, OnInit } from '@angular/core';
import { OsacadService } from '../../../services/osacad.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../../shared/services/app.service';
import { ApexService } from '../../../shared/services/apex.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoices: any = [];
  constructor(
    private osacadService: OsacadService,
    private apexService: ApexService,
    private appService: AppService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getInvoices();
  }
  getInvoices() {
    this.osacadService.getInvoices().subscribe(
      (response: any) => {
        if (response && response.status === 200) {
          this.invoices = response.body.reverse();
        }
      }, err => {
        if (err.status == 401) {
          this.apexService.showLoader(false);
          this.appService.navigate('/auth/login', null);
        }
      });
  }
  downloadInvoice(invoice) {
    if (invoice && invoice.invoiceLink) {
      window.location.href = invoice.invoiceLink;
    } else {
      this.toastr.error('No invoice found, Please try again later');
    }
  }
}
