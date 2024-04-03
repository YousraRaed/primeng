import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
})
export class ListboxComponent implements OnInit {
  items = Array.from({ length: 100000 }, (_, i) => ({
    label: `Item #${i}`,
    value: i,
  }));

  selectedItems!: any[];

  selectAll = false;

  onSelectAllChange(event: any) {
    this.selectedItems = event.checked ? [...this.items] : [];
    this.selectAll = event.checked;
    event.updateModel(this.selectedItems, event.originalEvent);
  }

  onChange(event: any) {
    const { originalEvent, value } = event;
    if (value) this.selectAll = value.length === this.items.length;
  }
  constructor() {}

  ngOnInit(): void {}
}
