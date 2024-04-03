import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent implements OnInit {
  value1: number = 42723;
  value2: number = 2500;
  value3: number = 50;

  constructor() {}

  ngOnInit(): void {}
}
