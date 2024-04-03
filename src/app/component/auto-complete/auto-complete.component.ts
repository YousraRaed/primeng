import { Component, OnInit } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
})
export class AutoCompleteComponent implements OnInit {
  items: any[] | undefined;
  selectedItem: any;
  suggestions: any[] = [];
  /////////
  countries: any[] | undefined;
  selectedCountry: any;
  filteredCountries: any[] = [];
  constructor() {}

  ngOnInit() {
    this.countries = [
      { code: 'AF', name: 'Afghanistan' },
      { code: 'AX', name: 'Åland Islands' },
      { code: 'AL', name: 'Albania' },
      { code: 'DZ', name: 'Algeria' },
      { code: 'AS', name: 'American Samoa' },
      { code: 'AD', name: 'Andorra' },
      { code: 'AO', name: 'Angola' },
      { code: 'AI', name: 'Anguilla' },
      { code: 'AQ', name: 'Antarctica' },
      { code: 'AG', name: 'Antigua and Barbuda' },
    ];
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + '-' + item
    );
  }
}
