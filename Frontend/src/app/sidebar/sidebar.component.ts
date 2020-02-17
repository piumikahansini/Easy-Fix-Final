import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
export interface Cookie {
  usertype:string,
  email: string,
  name:string,
  id:string,
  
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userdetail:Cookie={ usertype:"" ,email:"",name:"",id:""};

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit() {
    if(this.auth.getCookie("Auth")!=""){
      this.userdetail=JSON.parse(this.auth.getCookie("Auth"));
    }else{
      this.route.navigate(['/']);
    }
  }

}
