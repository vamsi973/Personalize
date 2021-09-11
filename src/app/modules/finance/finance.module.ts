import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import { CreateReportComponent } from './create-report/create-report.component';


@NgModule({
  declarations: [
    FinanceHomeComponent,
    CreateReportComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule
  ]
})
export class FinanceModule { }
