export interface RecordInterface {
  _id:string;
  value:string;
  type:RecordType;
  creationDate:Date;
  modificationDate:Date;
  definitions:DefinitionInterface[];
}

export interface DefinitionInterface{
    definitionId:string;
    translation:string;
    type:DefinitionType;
    info:string;
    examples:ExampleInterface[];
}

export interface ExampleInterface{
    exampleId:string;
    sentence:string;
    translation:string;
    info:string;
}

export type RecordType = 'WORD' | 'PHRASAL' | 'EXPRESSION';
export type DefinitionType = 'NOUN' | 'ADJECTIVE' | 'ADVERB' | 'VERB';
