import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urldecode'
})
export class UrldecodePipe implements PipeTransform {

  transform(value: string): any {
    return decodeURI(atob(value));
  }

}
