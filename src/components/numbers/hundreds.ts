import { BaseFactory } from '../factory/basefactory';
///THIS CLASS EXTENDS BEHAVIORS FROM BASEFACTORY
export class Hundreds extends BaseFactory {
  constructor(private _value: number, private _template: string) {
    super();
  }
  _stringNumber: string = '';
  build(child?: BaseFactory): BaseFactory {
    const _next: number = Number.parseFloat(this._template[16]) + Number.parseFloat(this._template[17]);
    this._stringNumber = _next > 0 ? ' E ' : '';
    return this;
  }
  getString(): string {
    this.build();

    return this._stringNumber;
  }
}
