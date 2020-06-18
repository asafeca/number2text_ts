import { BaseFactory } from '../factory/basefactory';
export declare class StringLineResult extends BaseFactory {
    private _children;
    private _convertedString;
    private static _instance;
    static getInstance(): StringLineResult;
    add(child: BaseFactory): void;
    build(child?: BaseFactory): BaseFactory;
    getString(): string;
}
