import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// declare var jQuery:any;
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
    // this.auth.Singnout();
    // AOS.init({
    //   duration: 2000,
    // })
  }


}
