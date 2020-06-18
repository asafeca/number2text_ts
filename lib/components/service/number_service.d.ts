import { StringLineResult } from './string_line_result';
export declare class NumberService {
    private static _instance;
    private _template;
    stringLineResult: StringLineResult;
    static getInstance(): NumberService;
    numberWatching(value: number): string;
}
