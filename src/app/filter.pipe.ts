import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filteString: string,propName:string):any[]{
    const result:any=[];
    if(!value || filteString===''|| propName===''){
      return value
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filteString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  } 
    
} 


