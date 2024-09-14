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
    info?:string;
    examples:ExampleInterface[];
}

export interface ExampleInterface{
    exampleId:string;
    sentence:string;
    translation?:string;
    info?:string;
}

export type RecordType = 'WORD' | 'PHRASAL' | 'EXPRESSION';
export type DefinitionType = 'NOUN' | 'ADJECTIVE' | 'ADVERB' | 'VERB' | 'UNKNOWN';



export const EXAMPLE_RECORD:RecordInterface = {
  _id:"12345",
  value:"bashful",
  type: 'WORD',
  creationDate: new Date(),
  modificationDate: new Date(),
  definitions: [
    {
      definitionId:"4321",
      translation:"tímido, vergonzoso",
      type:'ADJECTIVE',
      info:"Se utiliza normalmente para definir algo a qeu no tengo ni idea",
      examples:[
        {
          exampleId:"2222",
          sentence:"Martín was a clever child, but he was bashful and found it hard to talk to people",
          translation:"Martín era un chico listo, pero era tímido y le costaba hablar con la gente",
          info:"El motivo es que yo no se que poner"
        },
        {
          exampleId:"3333",
          sentence:"She was bashful about singing in front of the crowd at the talent show",
          translation:"Le daba verguenza cantar frente a la multitud en el concurso de talentos."
        }
      ]
    },
    {
      definitionId:"32412",
      translation:"petarda",
      type:'VERB',
      examples:[]
    }
  ]
}


export const RECORD_TYPE_OPTIONS: {label:string; value:RecordType}[] = [
  { label: 'Palabra', value: 'WORD' },
  { label: 'Phrasal Verb', value: 'PHRASAL' },
  { label: 'Expresión', value: 'EXPRESSION' },
]

export const DEFINITION_TYPE_OPTIONS: {label:string; value:DefinitionType}[] = [
  { label: 'Sustantivo', value: 'NOUN' },
  { label: 'Adjetivo', value: 'ADJECTIVE' },
  { label: 'Adverbio', value: 'ADVERB' },
  { label: 'Verbo', value: 'VERB' }
]
