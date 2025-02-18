import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string | undefined, args: any[]): string {

    if( !value ) return '';

    const limit = args.length > 0 ? parseInt(args[0], 25) : 30;
    const trail = args.length > 1 ? args[1] : '...';
    return (value && value.length > limit) ? value.substring(0, limit) + trail : value;
}

}
