import { Component, OnInit } from '@angular/core';
interface Customer {
  name: string;
  country: { name: string };
  company: string;
  representative: { name: string };
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  customers!: Customer[];

  constructor() {}

  ngOnInit() {
    this.customers = [
      {
        name: 'test',
        country: { name: 'test' },
        company: 'test',
        representative: { name: 'test' },
      },
      {
        name: 'test',
        country: { name: 'test' },
        company: 'test',
        representative: { name: 'test' },
      },
      {
        name: 'test',
        country: { name: 'test' },
        company: 'test',
        representative: { name: 'test' },
      },
      {
        name: 'test',
        country: { name: 'test' },
        company: 'test',
        representative: { name: 'test' },
      },
    ];
  }
}
