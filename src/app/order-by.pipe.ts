import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], key: any, order: any): any[] {
if(!key || '' === key ){
  return value;
} else{
  if('asc' === order){
    return value.sort((a : any, b : any) => b[key].localeCompare(a[key]));
  } else {
    return value.sort((a : any, b : any) => a[key].localeCompare(b[key]));
  }
}
  }

}
