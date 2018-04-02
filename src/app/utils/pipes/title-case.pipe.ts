/**
 * Transform to Title Case: uppercase the first letter of the words in a string.
 */
import { Pipe, PipeTransform } from '@angular/core';
// Declares that a class is a pipe and provides metadata about the pipe
@Pipe({
  name: 'titleCase',
  pure: false
})
export class TitleCasePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  transform(input: string): string {
    return input.length === 0 ? '' :
      input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
  }

}
