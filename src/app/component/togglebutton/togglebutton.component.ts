import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.scss'],
})
export class TogglebuttonComponent implements OnInit {
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
