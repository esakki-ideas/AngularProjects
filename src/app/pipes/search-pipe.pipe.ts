import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, key, searchKey): any {
    if(searchKey.length === 0){
      return value;
    } else {
      let searchResult = [];
      for(let user of value){
        if(user[key].toLowerCase().includes(searchKey.toLowerCase())){
          searchResult.push(user);
        }
      }
      return searchResult;
    }
  }

}
