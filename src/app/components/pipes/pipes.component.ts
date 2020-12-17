import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

Nombre = 'Jose Manuel TM';
NombreAlterno = 'JosE TiScAreño';
mostrar = true;
VideoUrl = 'https://www.youtube.com/embed/j1ngEIxopUU';
ArrayPrueba = ['A', 'B', 'C', 'D','F','G'];
Pi = Math.PI;
Fecha = new Date();
Precio = 199.99;

  constructor() { }

  ngOnInit(): void {
  }

}
