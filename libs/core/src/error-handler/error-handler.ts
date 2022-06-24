import { CustomException } from './custom.exception';

interface Response {
  status: boolean;
  msg: string;
  code: number;
}

export class ErrorHandler {
  public validate({ status, msg, code }: Response) {
    if (!status) {
      throw new CustomException(code ?? 400, msg);
    }
  }
}
