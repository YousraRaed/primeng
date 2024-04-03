import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  valueSimple!: number;
  value!: number;
  starValue = 5;
  constructor() {}

  ngOnInit(): void {}
}
