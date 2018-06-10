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
public isAvailable: boolean=true;
public css_classes: string[] = ['active','shadow'];

constructor(){
}
ngOnInit(){
     this.name='Bryan Aguilar';
     this.edad=26;
     this.mail='bryanaguilarvilla@gmail.com';
setTimeout(()=>this.name='Villaseñor',3000)
setTimeout(()=>this.isAvailable=false,3000)
setTimeout(()=>this.css_classes= ['active'],3000)

}


getEdadNombre(): string {
return `${this.name} : ${this.edad} : ${this.mail}`;

}

}
