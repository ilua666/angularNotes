import { Pipe, PipeTransform } from '@angular/core';
const tagRegexp = new RegExp("(^|\\s)(#.+?)\\b","g");
@Pipe({
  name: 'tagHighlight'
})
export class TagHighlightPipe implements PipeTransform {

  
  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(tagRegexp,'<span class="tagHighlight">$&</span>');
  }

}
