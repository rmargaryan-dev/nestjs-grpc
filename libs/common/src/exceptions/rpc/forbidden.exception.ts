import { RpcException } from '@nestjs/microservices';

export class ForbiddenRpcException extends RpcException {
  public static readonly EXCEPTION_PREFIX = 'RpcException.forbidden';

  constructor(message?: string) {
    super(`${ForbiddenRpcException.EXCEPTION_PREFIX}: ${message}`);
  }
}
