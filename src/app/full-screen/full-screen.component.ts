import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {
public genero: number ;
  constructor() { }

  ngOnInit() {
 this.genero="*** ";
  }

  getGenero(){
    return `${this.genero}`;
  }

}
