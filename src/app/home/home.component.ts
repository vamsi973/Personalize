import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
  ) {
  }

  ngOnInit() {
  }
}
