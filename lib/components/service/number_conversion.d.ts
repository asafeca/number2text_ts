import { BaseFactory } from '../factory/basefactory';
export declare class NumberConvertion extends BaseFactory {
    private _value;
    private _stringNumber;
    constructor(_value: number);
    build(child?: BaseFactory): BaseFactory;
    getString(): string;
}
