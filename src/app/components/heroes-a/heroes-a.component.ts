import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroes } from '../../models/heroes'
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroes-a',
  templateUrl: './heroes-a.component.html',
  styleUrls: ['./heroes-a.component.css']
})
export class HeroesAComponent implements OnInit {

  constructor(private heroS:HeroesService ) { }

  ngOnInit(): void {
    this.gheros();
  }
  heros: any[]=[];
  hmodel: Heroes=new Heroes;
  guardarid: any;

  gheros(){
    this.heroS.getheroes().then((data:any) => {
      this.heros=data;
      console.log(this.heros);
    });
  };

  pheros(form: NgForm){
    this.heroS.postheroes(this.hmodel).then((data:any) => {
      this.hmodel=data;
      console.log(this.hmodel);
    }).catch((error) => {
      console.log("Algo salio mal en el post",error);
    })
  }

  ptheros(){
    this.heroS.putheroes(this.hmodel,this.guardarid).then((data:any) => {
      this.hmodel = data;
      console.log(this.hmodel);
    })
  }

  delheros(){
    this.heroS.deleteheroes(this.guardarid).then((data: any) => {
      this.hmodel = data;
      console.log(this.hmodel);
    })
  }

  obtenerid(id:string){
    this.guardarid = id;
    console.log(this.guardarid);
  }


}
