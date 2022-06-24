export abstract class UseCaseBase<T, K> {
  public abstract execute(params: T): K | Promise<K>;
}
