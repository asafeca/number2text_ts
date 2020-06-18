import { BaseFactory } from '../factory/basefactory';

///THIS CLASS EXTENDS BEHAVIORS FROM BASEFACTORY
/// AND EXCUTES OTHER COMPONENTS
export class StringLineResult extends BaseFactory {
  private _children = Array<BaseFactory>();
  private _convertedString = '';
  private static _instance: StringLineResult;
  static getInstance(): StringLineResult {
    if (!StringLineResult._instance) {
      StringLineResult._instance = new StringLineResult();
    }
    return StringLineResult._instance;
  }
  add(child: BaseFactory) {
    this._children.push(child);
  }

  build(child?: BaseFactory): BaseFactory {
    this._children.map((data) => (this._convertedString += data.getString()));

    return this;
  }
  getString(): string {
    this.build();

    return this._convertedString;
  }
}
