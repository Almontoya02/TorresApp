import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Torre } from '../models/torre.model';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  httpClient:HttpClient
  listTorres:Torre[]=[]
  constructor(httpClient:HttpClient) {
    this.httpClient=httpClient
  }

  async getAllTorresRequest(){
    const data = await this.httpClient.get("http://localhost:4001/torre/listaTorre").toPromise();
    const json = JSON.parse(JSON.stringify(data))
    this.listTorres=json
    return this.listTorres
  }

  async deleteTorre(idTorre:any){
    const data = await this.httpClient.delete(`http://localhost:4001/torre/borrarTorre/${idTorre}`).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    console.log(idTorre,`http://localhost:4001/torre/borrarTorre/${idTorre}`)
    console.log(json,"Eliminado papu")
    return json.mensaje
  }
  async addTorre(nombreTorre:string,cantidadAptos:number){
    const data =  await this.httpClient.post(`http://localhost:4001/torre/crearTorre`,
      {
        nombreTorre,
        cantidadAptos
      }
    ).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    console.log(json.mensaje)
    return json.mensaje
  }
  
}
