import { Component, OnInit } from '@angular/core';

// TODO: Organize code, discuss with Nikolay
// TODO: Check https://www.freecodecamp.org/news/javascript-new-features-es2020/amp/
/*
Module Namespace Exports
// Possible for imports
import * as utils from './utils.mjs'
// Added the same possibility for exports
export * as utils from './utils.mjs'
This possibility replaced with this code
import * as utils from './utils.mjs'
export { utils }*/

@Component({
  selector: 'app-condition-import',
  templateUrl: './condition-import.component.html',
  styleUrls: ['./condition-import.component.scss']
})
export class ConditionImportComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<any> {
    this.bigInt();

    await this.dynamicImport();

    console.log(this.nullishCoalescing());

    this.optionalChaining();
    this.promiseAllSettled();
  }

  /**
    * Big int allows to store numbers more than pow(2, 53) - 1
    */
  private bigInt(): number {
    // Add "n" to end of number
    let bigInt = 9007199254740992;
    bigInt++;
    bigInt++;

    return bigInt;
  }

  private async dynamicImport() {
    const dynamicFile = await import('./dynamic-file');
    console.log('dynamicFile', dynamicFile);
  }

  /**
   * Nullish coalescing return falsy in comparisons except null and undefined
   */
  private nullishCoalescing() {
    return {
      falseValue: false ?? 'truth',
      truthValue: null ?? 'truth',
      zeroValue: 0 ?? 'truth',
      nanValue: NaN ?? 'truth',
      truthValue2: false || 'truth',
      truthValue3: null || 'truth',
      truthValue4: 0 || 'truth',
      truthValue5: NaN || 'truth',
    }
  }

  /**
   * Using optional chaining we can specify optional properties
   */
  private optionalChaining() {
    const x = {
      prop1: {
        prop2: 100
      },
    };

    console.log(
      x.prop1?.prop2,
      x.prop1?.notExist,
    );
  }

  /**
   * Resolves when all promises resolves or rejected
   */
  private promiseAllSettled() {
    const myPromiseArray = [
      Promise.resolve(100),
      Promise.reject(null),
      Promise.reject(new Error('Error text')),
    ];

    Promise.allSettled(myPromiseArray)
      .then(results => {
        console.log(results);
      });
  }
}
