import { ErrorHandler } from './error-handler';

export function response<K>(Mapper?: any) {
  return function (
    target: any,
    key: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<K>>
  ) {
    const method = descriptor.value as any;
    descriptor.value = async function (...args: any[]) {
      try{
        const methodResponse = await method.apply(this, args);
        console.log(Mapper)
        return new Mapper(...args).create(methodResponse);
      } catch(error) {
        // handle custom exception
        console.log(error)
        throw error
      }
      
    };
  };
}
