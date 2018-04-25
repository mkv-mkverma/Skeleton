import { Pipe, PipeTransform } from '@angular/core';
// Declares that a class is a pipe and provides metadata about the pipe
@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
