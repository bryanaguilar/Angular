import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  //styles: ['h1{font-family:Roboto;}']
 styleUrls: ['title.component.css']
})
export class TitleComponent implements  OnInit{
public name: string ;
public edad: number ;
public mail: string ;
//alcance por typescript

constructor(){
}
ngOnInit(){
     this.name='Bryan Aguilar';
     this.edad=26;
     this.mail='bryanaguilarvilla@gmail.com';
}


getEdadNombre(): string {
return `${this.name} : ${this.edad} : ${this.mail}`;

}

}
