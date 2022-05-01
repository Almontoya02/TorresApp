import { Component, OnInit } from '@angular/core';
import { TorreService } from './../../services/torre.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  nombreTorre=""
  cantidadAptos=""
  constructor(public torreService:TorreService) {
    this.torreService.getAllTorresRequest()
   }

  ngOnInit(): void {
    
  }

  async deleteTorre(idTorre:any){
    const opcion = confirm("Está seguro que desea eliminarla?")
    if(opcion){
      const res = await this.torreService.deleteTorre(idTorre);
      if(res==="Torre eliminada"){
        alert("Eliminada con exito")
        this.torreService.getAllTorresRequest();
      }
    }

  }

  async addTorre(){
    if(this.nombreTorre=="" || this.cantidadAptos==""){
      alert("Ingrese todos los campos")
      return
    }
    const mensajeAdd = await this.torreService.addTorre(this.nombreTorre,Number(this.cantidadAptos))
    if(mensajeAdd==="Torre creada"){
      alert("Agregado con exito")
      this.torreService.getAllTorresRequest();
    }
  }
  

}
