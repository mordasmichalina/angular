import { Pipe, PipeTransform } from '@angular/core'


@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    var output='';
    var duration = value.split(' ');
    if (duration.length > 1) {
      output = duration[0] + ' day(s) '
      duration = duration[1].split(':')
      if (duration[0] != '00') {
        output = output + duration[0] + ' hour(s) '
      }
      if (duration[1] != '00') {
        output = output + duration[1] + ' minute(s) '
      }
      if (duration[2] != '00') {
        output = output + duration[2] + ' second(s) '
      }
    }
    else {
      duration = duration[0].split(':')
      if (duration[0] != '00') {
        output = duration[0] + ' hour(s) '
      }
      if (duration[1] != '00') {
        output = output + duration[1] + ' minute(s) '
      }
      if (duration[2] != '00') {
        output = output + duration[2] + ' second(s) '
      }
    }
    return output
  }
}
