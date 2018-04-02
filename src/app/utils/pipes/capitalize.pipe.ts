/**
 *  First letter as a capital letter (upper-case letter) and the remaining letters in lower case.
 */
import { Injectable, Pipe, PipeTransform } from '@angular/core';
// Declares that a class is a pipe and provides metadata about the pipe
@Pipe({
  name: 'capitalize',
  pure: false
})
export class CapitalizePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  transform(input: string): string {
    return input.length === 0 ? '' :
      input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }

}


