import { Pipe, PipeTransform } from '@angular/core';
import { DefinitionType } from '../../data/record.interface';

@Pipe({
  name: 'definitionTypePipe',
  standalone: true
})
export class DefinitionTypePipe implements PipeTransform {

  transform(definitionType: DefinitionType): string {
    switch(definitionType){
      case 'ADJECTIVE':
        return "adj";
      case 'ADVERB':
        return "adv";
      case 'VERB':
        return "v";
      case 'NOUN':
        return "n";
      default:
        return '';
    }
  }

}
