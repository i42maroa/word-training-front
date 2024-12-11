export interface RecordNewRequest{
    value:string;
    type:string;
    definitions:DefinitionNewRequest[];
}

export interface DefinitionNewRequest{
  translation:string;
  type:string;
  info?:string;
  examples:ExampleNewRequest[];
}


export interface ExampleNewRequest{
  sentence:string;
  translation:string;
}
