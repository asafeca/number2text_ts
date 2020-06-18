export declare abstract class BaseFactory {
    abstract build(child: BaseFactory): BaseFactory;
    abstract getString(): string;
}
