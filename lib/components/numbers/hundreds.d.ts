import { BaseFactory } from '../factory/basefactory';
export declare class Hundreds extends BaseFactory {
    private _value;
    private _template;
    constructor(_value: number, _template: string);
    _stringNumber: string;
    build(child?: BaseFactory): BaseFactory;
    getString(): string;
}
