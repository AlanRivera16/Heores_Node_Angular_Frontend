import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPass'
})
export class OcultarPassPipe implements PipeTransform {

  transform(value: string, mostrar:boolean = false): string {
    return (mostrar)? '*'.repeat(value.length) : value;
  }
}
    
  

