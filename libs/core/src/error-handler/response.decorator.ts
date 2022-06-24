import { ErrorHandler } from './error-handler';

export function response<T, K>(Mapper?: any) {
  return function (
    target: any,
    key: string,
    descriptor: TypedPropertyDescriptor<(...args: T[]) => Promise<K>>
  ) {
    const method = descriptor.value as any;
    descriptor.value = async function (...args: any[]) {
      const methodResponse = await method.apply(this, args);
      new ErrorHandler().validate(methodResponse);
      const data = methodResponse.data ?? [];

      return Mapper ? new Mapper(...args).create(data) : data;
    };
  };
}
