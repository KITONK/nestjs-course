import { type PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class StringToLowerCasePipe implements PipeTransform<string, string> {
  transform(value: string): string {
    if (typeof value === 'string') {
      return value.toLocaleLowerCase();
    }
    return value;
  }
}
