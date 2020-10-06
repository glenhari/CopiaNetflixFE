import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";
import { Profiles } from '../profiles';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0, transform: "scale(1.1)"}),
        animate(450)
      ])
    ])
  ]
})
export class ProfilesListComponent implements OnInit {

  constructor(private profilesService:ProfilesService) { }

  perfis;
  showSpinner: boolean = true; 

  ngOnInit(): void {
    this.profilesService.getProfiles().subscribe((data: Profiles) => {
      this.perfis = data;
    });
  }
}
