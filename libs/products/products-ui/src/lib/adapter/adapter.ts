
import 'reflect-metadata'
import { uiContainer } from '../../config/ui.container';

export const adapter = async <T, K>(symbol: any, params: T[] = []) => {
  let errorData: any;
  let data: K;
  try {
    const newType: any = uiContainer.resolve(symbol);
    data = await newType.execute(...params);
    return { data, error: null}
  } catch (error: any) {
    errorData = { code: error.code ?? 0, message: error.message };
    return { data: null, error: errorData}
  }
};
 