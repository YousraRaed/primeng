import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
})
export class KnobComponent implements OnInit {
  value: number = 0;
  readonlyMode: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
