import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({transform: "scale(1.1)", opacity:1}),
        animate(450)
      ])
    ])
  ]
})
export class LoadingSpinnerComponent implements OnInit,OnChanges {

  @Input() fotoPerfilURL: string;
  constructor(
  ) {}

  ngOnChanges(){
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log(this.fotoPerfilURL);
  }

}
