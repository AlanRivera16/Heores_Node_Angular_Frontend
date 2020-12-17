import { Pipe, PipeTransform } from '@angular/core';
//Decorador
@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  // value es el valor antes de entrar al pipe
  // Un pipe siempre recibe argumentos
  // edad: number, activo:Boolean, mensaje:string --> esto iba despues del string
  transform(value: string, todas:true): string {
    console.log(value.toLowerCase());
    value = value.toLowerCase();

    //Dividir string (value) en palabras
    let palabras = value.split(' ');
    console.log(palabras);

    // Verificar cuando todas viene true; se capitaliza todo el string

    if (todas){
      palabras = palabras.map( palabra => {
        return palabra[0].toUpperCase() + palabra.substr(1);
      });
    }else{
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }
        

    // console.log({edad,activo,mensaje});
    return palabras.join(' ');
  }

}
