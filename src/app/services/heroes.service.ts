import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroes } from '../models/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(public http: HttpClient) { }

  //metodos
  getParaHeroes(){
    return this.http.get('http://localhost:3000/heroesAct').toPromise();
  }

  //POST
  postParaHeroes(mod:Heroes){
    return this.http.post('http://localhost:3000/heroe', mod).toPromise();
  }

  //PUT
  putParaHeroes(mod:Heroes,id:string){
    return this.http.put(`http://localhost:3000/heroe/${id}`, mod).toPromise();
  }

  //DELETE
  deleteParaHeroes(id:string){
    return this.http.delete(`http://localhost:3000/hero/${id}`).toPromise();
  }

    

}
