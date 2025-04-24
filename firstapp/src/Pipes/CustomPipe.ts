import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/Employee';


@Pipe({name: 'filterbycity',standalone:true})
export class CustomPipecity implements PipeTransform {
    transform(values:Employee[],city:string)
    {
      if(!values||!city)
      {
        return values;
      }
      return values.filter((x=>x.city.toLowerCase().indexOf(city.toLowerCase())!==-1));
    }
  }

  @Pipe({name: 'filterbysalary',standalone:true})
export class CustomPipesalary implements PipeTransform {
    transform(values:Employee[],salary:number)
    {
      if(!values||!salary)
      {
        return values;
      }
      return values.filter((x=>x.salary>salary));
    }
  }