import { RpcException } from '@nestjs/microservices';

export class UnprocessableEntityRpcException extends RpcException {
  public static readonly EXCEPTION_PREFIX = 'RpcException.unprocessableEntity';

  constructor(message?: string) {
    super(`${UnprocessableEntityRpcException.EXCEPTION_PREFIX}: ${message}`);
  }
}
