import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateReportComponent } from '../create-report/create-report.component';

@Component({
  selector: 'app-finance-home',
  templateUrl: './finance-home.component.html',
  styleUrls: ['./finance-home.component.css']
})
export class FinanceHomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  createFinanceRecord() {
    console.log('create finance record');
    const dialogRef = this.dialog.open(CreateReportComponent, {
      width: '700px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status) {
        console.log('status reported');
      } else {
        console.log("failed case");
      }
    });
  }
}
