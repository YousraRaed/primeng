import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  date1: Date | undefined;

  date2: Date | undefined;

  date3: Date | undefined;
  constructor() {}

  ngOnInit(): void {}
}
