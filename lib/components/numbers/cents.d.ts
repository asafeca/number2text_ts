import { BaseFactory } from '../factory/basefactory';
export declare class Cents extends BaseFactory {
    private _value;
    private _template;
    private _stringNumber;
    constructor(_value: number, _template: string);
    build(child?: BaseFactory): BaseFactory;
    getString(): string;
}
