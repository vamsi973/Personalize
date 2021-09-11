import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinanceService } from 'src/app/services/finance.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {
  flowType = [
    { name: 'Income' },
    { name: 'Investment' },
    { name: 'Loan Repayment' },
    { name: 'Saving' },
  ];
  tags = []
  constructor(
    public dialogRef: MatDialogRef<CreateReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private finance: FinanceService,
    private log: LogService,
  ) { }

  ngOnInit(): void {
    this.finance.spendingTypes().subscribe((data) => {
      if (data.success) {
        this.flowType = data.data;
      }
    }, (err) => {
      this.log.loggerNote(err).subscribe((data) => { });
    })

    // this.finance.getTags().subscribe((data) => {
    //   if (data.success) { }
    // })
  }
  public reportCreate = this.fb.group({
    title: this.fb.control('', Validators.required),
    amount: this.fb.control('', Validators.required),
    description: this.fb.control('', Validators.required),
    tag: this.fb.control('', Validators.required),
    repayment: this.fb.control('', Validators.required),
    flowType: this.fb.control('', Validators.required),
  });
  createReportRecord() {
    if (!this.reportCreate.valid) {
      return
    }
    console.log(this.reportCreate.value);
    this.finance.createReport(this.reportCreate.value).subscribe((data) => {
      if (data.success) {
        console.log(data);
      }
    }, (err) => {
      this.log.loggerNote(err).subscribe((data) => { });
    })
  }
  onNoClick() { 
    this.dialogRef.close();
  }
}