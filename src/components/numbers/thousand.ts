import { BaseFactory } from '../factory/basefactory';
///THIS CLASS EXTENDS BEHAVIORS FROM BASEFACTORY
export class Thousand extends BaseFactory {
  constructor(private _value: number, private _template: string) {
    super();
  }
  _stringNumber: string = '';
  build(): BaseFactory {
    const _next: number =
      Number.parseFloat(this._template[12]) +
      Number.parseFloat(this._template[13]) +
      Number.parseFloat(this._template[14]) +
      Number.parseFloat(this._template[15]) +
      Number.parseFloat(this._template[16]) +
      Number.parseFloat(this._template[17]);
    this._stringNumber = ' MIL' + (_next > 0 ? ' E ' : '');

    return this;
  }
  getString(child?: BaseFactory): string {
    this.build();

    return this._stringNumber;
  }
}
