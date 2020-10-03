import { Component, OnInit } from '@angular/core';
import { TitulosService } from './titulos.service';
import { Titulos } from './titulos';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private titulos:TitulosService){}

  title = 'CopiaNetflixFE';
  
  ngOnInit(){
    this.titulos.getTitulos().subscribe((data: Titulos) => {
      console.log(data);
    },(error) => {console.log(error)})
  }
}
