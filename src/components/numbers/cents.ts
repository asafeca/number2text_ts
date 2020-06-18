import { BaseFactory } from '../factory/basefactory';

///THIS CLASS EXTENDS BEHAVIORS FROM BASEFACTORY
export class Cents extends BaseFactory {
  private _stringNumber: string = '';
  constructor(private _value: number, private _template: string) {
    super();
  }
  build(child?: BaseFactory): BaseFactory {
    if (this._value === 1) {
      this._stringNumber = ' CENTAVO';
    } else if (this._value > 1) {
      this._stringNumber = ' CENTAVOS';
    }

    return this;
  }
  getString(): string {
    this.build();

    return this._stringNumber;
  }
}
