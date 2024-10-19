import { RpcException } from '@nestjs/microservices';

export class BadRequestRpcException extends RpcException {
  public static readonly EXCEPTION_PREFIX = 'RpcException.badRequest';

  constructor(message?: string) {
    super(`${BadRequestRpcException.EXCEPTION_PREFIX}: ${message}`);
    console.log(this);
  }
}
