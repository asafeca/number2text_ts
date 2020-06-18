import { BaseFactory } from '../factory/basefactory';
export declare class Thousand extends BaseFactory {
    private _value;
    private _template;
    constructor(_value: number, _template: string);
    _stringNumber: string;
    build(): BaseFactory;
    getString(child?: BaseFactory): string;
}
