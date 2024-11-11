export interface FiltersStoraged{
  text:string;
  typeIn:boolean[];
  pending:boolean;
}

export interface FiltersRequest{
  text:string;
  typeIn:string[];
  pending:boolean;
}


export function translateTypeInFilter(typeIn:boolean[]):string[]{
  return  typeIn
      .map((checked:boolean, i:number) => checked ? FILTER_TYPE_IN_OPTION[i].value: '')
      .filter((value:string) => value !== '');
}

export const FILTER_TYPE_IN_OPTION = [
  {description: 'Palabra', value: 'WORD'},
  {description: "Phrasal Verb", value: 'PHRASAL'},
  {description: "Expresión", value: 'EXPRESSION'}
]
