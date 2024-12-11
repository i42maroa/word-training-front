import { Pipe, PipeTransform } from '@angular/core';
import { ModalType } from '../../../data/modal.interface';

@Pipe({
  name: 'modalTitlePipe',
  standalone: true
})
export class ModalTitlePipe implements PipeTransform {

  transform(type: ModalType): string {
    switch(type){
      case 'new-record':
        return "Nuevo registro";
      case 'new-definition':
        return "Nueva definición";
      case 'delete-record':
          return "Eliminar registro";
      case 'new-example':
        return "Nuevo ejemplo";
      case 'modify-record':
          return "Modificar registro";
      case 'search-record':
            return "Buscar registros";
      default:
        return '';
    }
  }
}
