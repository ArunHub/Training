import { Injectable } from '@angular/core';
import { getSymbolIterator } from '@angular/core/src/util';

@Injectable()
export class YearService {

   constructor() { }

   yearList = [
      { id: 1, name: 2020 },
      { id: 5, name: 2022 }
   ]

   getYear(id) {
      return this.yearList.filter(t => t.id === id);
   }
}
