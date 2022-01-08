import { Component, OnInit } from '@angular/core';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
// import {image}  '../../assets/imageIcon.jpg';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imageSrc = "../../assets/imageIcon.jpg";
  bell = faBell
  search = faSearch
  constructor() { }

  ngOnInit() {
  }

}
