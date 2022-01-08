import { Component, OnInit } from '@angular/core';
import { faBaseballBall, faHome, faSignal, faWallet, faListUl, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   ball = faBaseballBall;
   home = faHome;
   signalIcon = faSignal;
   wallet = faWallet;
   listIcon = faListUl
   setting = faCog
  
  constructor() { }

  ngOnInit() {
  }

}
