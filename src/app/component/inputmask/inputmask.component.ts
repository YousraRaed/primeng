import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputmask',
  templateUrl: './inputmask.component.html',
  styleUrls: ['./inputmask.component.scss'],
})
export class InputmaskComponent implements OnInit {
  value1: string | undefined;

  value2: string | undefined;

  value3: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
