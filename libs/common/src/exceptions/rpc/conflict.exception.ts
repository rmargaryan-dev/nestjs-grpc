import { RpcException } from '@nestjs/microservices';

export class ConflictRpcException extends RpcException {
  public static readonly EXCEPTION_PREFIX = 'RpcException.conflict';

  constructor(message?: string) {
    super(`${ConflictRpcException.EXCEPTION_PREFIX}: ${message}`);
    console.log(this instanceof RpcException, 'IIIIIIIIIIIs');
    console.log(this.getError());
  }
}
