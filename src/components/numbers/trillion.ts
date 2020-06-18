import { BaseFactory } from '../factory/basefactory';
///THIS CLASS EXTENDS BEHAVIORS FROM BASEFACTORY
export class Trillion extends BaseFactory {
  private _stringnumber: string = '';
  constructor(private value: number, private _template: string) {
    super();
  }

  build(child?: BaseFactory): BaseFactory {
    const _next: number =
      Number.parseFloat(this._template[3]) +
      Number.parseFloat(this._template[4]) +
      Number.parseFloat(this._template[5]) +
      Number.parseFloat(this._template[6]) +
      Number.parseFloat(this._template[7]) +
      Number.parseFloat(this._template[8]) +
      Number.parseFloat(this._template[9]) +
      Number.parseFloat(this._template[10]) +
      Number.parseFloat(this._template[11]) +
      Number.parseFloat(this._template[12]) +
      Number.parseFloat(this._template[13]) +
      Number.parseFloat(this._template[14]);
    if (this.value === 1) {
      this._stringnumber = ' TRILHÃO' + (_next > 1 ? ' E' : '');
    } else if (this.value > 1) {
      this._stringnumber = ' TRILHÕES' + (_next > 1 ? ' E' : '');
    }

    return this;
  }
  getString(): string {
    this.build();

    return this._stringnumber;
  }
}
