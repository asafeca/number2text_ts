import { BaseFactory } from '../factory/basefactory';
export declare class Trillion extends BaseFactory {
    private value;
    private _template;
    private _stringnumber;
    constructor(value: number, _template: string);
    build(child?: BaseFactory): BaseFactory;
    getString(): string;
}
