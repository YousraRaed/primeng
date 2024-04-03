import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss'],
})
export class ColorpickerComponent implements OnInit {
  color: string = '#6466f1';

  colorRGB: any = { r: 100, g: 102, b: 241 };

  colorHSB: any = { h: 239, s: 59, b: 95 };
  constructor() {}

  ngOnInit(): void {}
}
