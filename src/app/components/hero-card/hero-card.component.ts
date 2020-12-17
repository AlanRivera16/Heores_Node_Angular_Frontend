import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {


  //Recibir la informacion de un componente Padre
  @Input() PadreHero: any = {};
  @Input() Index: number;

  //Mandar informacion del hijo a un padre
  @Output() SelectedHero: EventEmitter<number>

  constructor( private router:Router) {
    this.SelectedHero = new EventEmitter();
   }

  ngOnInit(): void {
  }

  Navegar(){
    this.router.navigate(['/hero',this.Index])

  }

}
