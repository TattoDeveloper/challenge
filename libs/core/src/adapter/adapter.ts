/* import { container } from '@meli-challenge/config';

export const adapter = async <T, K>(symbol: any, params: T[] = []) => {
  let errorData: any;
  let data: K;
  const newType: any = container.get(symbol);

  try {
    data = await newType.execute(...params);
  } catch (error: any) {
    errorData = { code: error.code ?? 0, message: error.message };
  }

  return { data: data ?? null, error: errorData ?? null };
};
 */