import { StringLineResult } from './string_line_result';
import { Trillion } from '../numbers/trillion';
import { Cents } from '../numbers/cents';
import { NumberConvertion } from './number_conversion';
import { Billion } from '../numbers/billion';
import { Million } from '../numbers/million';
import { Thousand } from '../numbers/thousand';
import { Hundreds } from '../numbers/hundreds';

export class NumberService {
  private static _instance: NumberService;

  ///DECLARE OUR TEMPLATE TO KNOW AND CONTROL THE 
  /// THE NUMBER LENGTH
  private _template: string = '';

  ///StringLineResult IS THE COMPONENT ACTING LIKE A CONTAINER
  ///WE CAN ADD COMPONENTS INSIDE IT
  stringLineResult = StringLineResult.getInstance();
  static getInstance(): NumberService {
    if (!NumberService._instance) {
      NumberService._instance = new NumberService();
    }
    return NumberService._instance;
  }
  numberWatching(value: number): string {

    ///FILLING THE TEMPLATE, THE MAXIMUM IS 18. 15 FOR 
    ///INTEGERS AND 3 FOR DECIMAL
    for (let x = 0; x < 18 - value.toFixed(2).length; x++) {
      this._template += '0';
    }
    this._template += value.toFixed(2).replace('.', '0');

    ///ALL THE NUMBERS ARE REPRESENTED AS A CLASS COMPONENT
    ///THEY BELONG TO BASEFACTORY CLASS

    for (let k = 0; k <= 15; k += 3) {
      const _currentValue: string = this._template[k] + this._template[k + 1] + this._template[k + 2];

      this.stringLineResult.add(new NumberConvertion(Number.parseFloat(_currentValue)));
      if (k === 0) {
        if (Number.parseFloat(_currentValue) > 0) {
          this.stringLineResult.add(new Trillion(Number.parseFloat(_currentValue), this._template));
        }
      } else if (k === 3) {
        if (Number.parseFloat(_currentValue) > 0) {
          this.stringLineResult.add(new Billion(Number.parseFloat(_currentValue), this._template));
        }
      } else if (k === 6) {
        if (Number.parseFloat(_currentValue) > 0) {
          this.stringLineResult.add(new Million(Number.parseFloat(_currentValue), this._template));
        }
      } else if (k === 9) {
        if (Number.parseFloat(_currentValue) > 0) {
          this.stringLineResult.add(new Thousand(Number.parseFloat(_currentValue), this._template));
        }
      } else if (k === 12) {
        if (Number.parseFloat(_currentValue) > 0) {
          this.stringLineResult.add(new Hundreds(Number.parseFloat(_currentValue), this._template));
        }
      } else if (k === 15) {
        const _cents: number = Number.parseFloat(this._template[16]) + Number.parseFloat(this._template[17]);
        if (_cents > 0) {
          this.stringLineResult.add(new Cents(Number.parseFloat(_currentValue), this._template));
        }
      }
    }

    ///LET'S AVOID PRESENTING => UM MIL WHEN WE HAVE A  THOUSAND
    let _data = this.stringLineResult.getString();
    const _repeated= _data.includes('UM') && _data.includes('MIL');
    if(_repeated){
      _data=_data.substring(3,);
    }
    return _data
  }
}
