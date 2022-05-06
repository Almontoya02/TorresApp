import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
    const data = await this.httpClient.get(`${environment.serverUrl}/torre/listaTorre`,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    this.listTorres=json
    return this.listTorres
  }

  async deleteTorre(idTorre:any){
    const data = await this.httpClient.delete(`${environment.serverUrl}/torre/borrarTorre/${idTorre}`).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    console.log(idTorre,`${environment.serverUrl}/torre/borrarTorre/${idTorre}`)
    console.log(json,"Eliminado papu")
    return json.mensaje
  }
  async addTorre(nombreTorre:string,cantidadAptos:number){
    const data =  await this.httpClient.post(`${environment.serverUrl}/torre/crearTorre`,
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
