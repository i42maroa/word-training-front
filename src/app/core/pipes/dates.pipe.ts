import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datesPipe',
  standalone: true
})
export class DatesPipe implements PipeTransform {

  transform(value: Date | undefined): string {

    if(value){
      const date = new Date(+value * 1000)
      return convertToNiceDate(date);
    }
    return '';
  }
}

const convertToNiceDate = (date: Date):string => {

  const  timeDiff = (((new Date()).getTime() - date.getTime()) / 1000);
  const  daydiff = Math.floor(timeDiff / 86400);

  if(daydiff < 1){
    return 'hoy'
  }else if(daydiff === 1){
    return 'ayer'
  }else if(daydiff > 1 && daydiff < 7){
    return 'hace '+ daydiff+ " días"
  }else{
    const datePipe = new DatePipe("en-US");
    return datePipe.transform(date, 'dd/MM/yy')?? '';
  }
}
