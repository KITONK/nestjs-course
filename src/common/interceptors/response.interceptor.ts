import { map, Observable } from 'rxjs';
import {
  type CallHandler,
  type ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';

export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        status: 'OK',
        data,
      })),
    );
  }
}
