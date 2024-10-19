import { RpcException } from '@nestjs/microservices';

export class NotFoundRpcException extends RpcException {
  public static readonly EXCEPTION_PREFIX = 'RpcException.notFound';

  constructor(message?: string) {
    super(`${NotFoundRpcException.EXCEPTION_PREFIX}: ${message}`);
  }
}
