///THIS CLASS IS A COMPOSER,
/// ALL CLASSES ARE COMPONENTS BEHAVING LIKE THIS

export abstract class BaseFactory {
  abstract build(child: BaseFactory): BaseFactory;
  abstract getString(): string;
}
