import { Component, OnInit } from '@angular/core';

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

    this.nullishCoalescing();
  }

  // TODO: Check https://www.freecodecamp.org/news/javascript-new-features-es2020/amp/
  /***
  * Big int allows to store numbers more than pow(2, 53) - 1
  * */
  private bigInt(): bigint {
    let bigInt = 9007199254740992n;
    bigInt++;
    bigInt++;

    return bigInt;
  }

  private async dynamicImport() {
    const dynamicFile = await import('./dynamic-file');
    console.log('dynamicFile', dynamicFile);
  }

  private nullishCoalescing() {
    return {
      falseValue: false ?? 'truth',
    }
  }
}
