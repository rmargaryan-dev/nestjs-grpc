import { RpcException } from '@nestjs/microservices';

export class UnauthorizedRpcException extends RpcException {
  public static readonly EXCEPTION_PREFIX = 'RpcException.unauthorized';

  constructor(message?: string) {
    super(`${UnauthorizedRpcException.EXCEPTION_PREFIX}: ${message}`);
  }
}
