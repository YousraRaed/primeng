import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  value: number | undefined;
  valueString?: string;
  value3: string | undefined;
  value4: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
