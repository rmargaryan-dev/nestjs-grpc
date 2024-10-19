import {
  ArgumentsHost,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  RpcExceptionFilter as IRpcExceptionFilter,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';
import {
  BadRequestRpcException,
  ConflictRpcException,
  ForbiddenRpcException,
  NotFoundRpcException,
  UnauthorizedRpcException,
  UnprocessableEntityRpcException,
} from '@app/common/exceptions';

export class RpcExceptionFilter implements IRpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    return throwError(() => {
      return this.handleRpcException(exception);
    });
  }

  private handleRpcException(exception: RpcException): HttpException {
    const messagePrefix = exception.message.split(':')[0];

    switch (messagePrefix) {
      case ConflictRpcException.EXCEPTION_PREFIX:
        console.log('&&&&&&&&');
        return new ConflictException(exception.message);
      case NotFoundRpcException.EXCEPTION_PREFIX:
        return new NotFoundException(exception.message);
      case UnprocessableEntityRpcException.EXCEPTION_PREFIX:
        return new UnprocessableEntityException(exception.message);
      case BadRequestRpcException.EXCEPTION_PREFIX:
        return new BadRequestException(exception.message);
      case ForbiddenRpcException.EXCEPTION_PREFIX:
        return new ForbiddenException(exception.message);
      case UnauthorizedRpcException.EXCEPTION_PREFIX:
        return new UnauthorizedException(exception.message);

      default:
        return new InternalServerErrorException();
    }
  }
}
