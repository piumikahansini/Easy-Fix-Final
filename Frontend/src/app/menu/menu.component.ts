import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
export interface Cookie {
  usertype:string,
  name:string,
  id:string,
  
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userdetail:Cookie={ usertype:"" ,name:"",id:""};
  usertype="";

  constructor( private auth:AuthService,private route:Router) { }

  ngOnInit() {
    if(this.auth.getCookie("Auth")!=""){
      this.userdetail=JSON.parse(this.auth.getCookie("Auth"));
      this.usertype=this.userdetail.usertype;
    }else{
      this.route.navigate(['/']);
    }
  }

}



