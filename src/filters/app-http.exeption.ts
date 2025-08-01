import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionMessage } from '../enums/exception-message';
import { ExceptionLocalCode } from '../enums/exception-local-code';

export class AppHttpException extends HttpException {
  constructor(
    message: ExceptionMessage,
    statusCode: HttpStatus,
    localCode?: ExceptionLocalCode,
    args?: object,
  ) {
    super({ message, localCode, args }, statusCode);
  }
}
