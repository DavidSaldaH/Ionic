import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  nombre: string;
  apellido: string;
  edad: number;
  genero: string;
  direccion: any;
  fecha: Date;
  listaInfo: any[] = [];
  constructor() {
    this.nombre = 'David';
    this.apellido = 'Saldarriaga';
    this.edad = 22;
    this.genero = 'Masculino'
    this.direccion = 'Calle me la pela';
    this.fecha = new Date;
    this.listaInfo.push(this.nombre);
    this.listaInfo.push(this.apellido);
    this.listaInfo.push(this.edad);
    this.listaInfo.push(this.genero);
    this.listaInfo.push(this.direccion);
    this.listaInfo.push(this.fecha);
  }
  mostrarAlerta(){
    alert("Usuario Registrado");
  }
}
