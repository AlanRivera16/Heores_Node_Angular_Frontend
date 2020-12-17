import { error } from '@angular/compiler/src/util';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroes } from '../../models/heroes'
import { HeroesService } from '../../services/heroes.service'
import swal from 'sweetalert2'

const Toast = swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 4000,
  backdrop: `rgba(26, 29, 32, 0.46)`
})


@Component({
  selector: 'app-heroes-a',
  templateUrl: './heroes-a.component.html',
  styleUrls: ['./heroes-a.component.css']
})
export class HeroesAComponent implements OnInit {

  constructor(private heroS:HeroesService ) { }

  ngOnInit(): void {
    this.getHeros();
  }
  heros: any[]=[];
  hmodel: Heroes=new Heroes;
  guardarid: any;

  @Output() salida = new EventEmitter;

  getHeros(){
    this.heroS.getParaHeroes().then((data:any) => {
      this.heros=data;
      console.log(this.heros);
    });
  };

  postHeros(form: NgForm){
    this.heroS.postParaHeroes(this.hmodel).then((data:any) => {
      this.hmodel=data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(this.hmodel);
    }).catch((error) => {
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log("Algo salio mal en el post",error);
    })
  }

  putHeros(){
    this.heroS.putParaHeroes(this.hmodel,this.guardarid).then((data:any) => {
      this.hmodel = data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(this.hmodel);
    }).catch((error) => {
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log("Algo salio mal con el put",error);
    })
  }

  deleteHeros(){
    this.heroS.deleteParaHeroes(this.guardarid).then((data: any) => {
      this.hmodel = data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(this.hmodel);
    }).catch((error) => {
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log("Algo salio mal con el delete",error);
    })
  }

  obtenerID(id:string){
    this.guardarid = id;
    console.log(this.guardarid);
  }


}
