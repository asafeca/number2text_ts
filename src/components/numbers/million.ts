import { BaseFactory } from '../factory/basefactory';
///THIS CLASS EXTENDS BEHAVIORS FROM BASEFACTORY
export class Million extends BaseFactory {
  constructor(private _value: number, private _template: string) {
    super();
  }
  _stringNumber: string = '';
  build(child?: BaseFactory): BaseFactory {
    const _next: number =
      Number.parseFloat(this._template[9]) +
      Number.parseFloat(this._template[10]) +
      Number.parseFloat(this._template[11]) +
      Number.parseFloat(
        this._template[12] + Number.parseFloat(this._template[13] + Number.parseFloat(this._template[14])),
      );
    if (this._value === 1) {
      this._stringNumber = ' MILHÃO' + (_next > 0 ? ' E' : '');
    } else if (this._value > 1) {
      this._stringNumber = ' MILHÕES' + (_next > 0 ? ' E' : '');
    }
    return this;
  }
  getString(): string {
    this.build();

    return this._stringNumber;
  }
}
