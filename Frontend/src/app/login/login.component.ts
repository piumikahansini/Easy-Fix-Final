import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router} from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    // private db:AngularFireDatabase,
    public auth:AuthService,
    private router: Router,
    private http: HttpClient,
    public snackBar: MatSnackBar,
    ) {
    
   }

  ngOnInit() {

  }
  Login(formData) {
    
    if(formData.username == ''){
      let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          this.snackBar.open("User ID is empty..! ", true ? "Retry" : undefined, config);
    }
    else if(formData.psw == ''){
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Password is Empty..! ", true ? "Retry" : undefined, config);
    }
    else{

      if(this.auth.SignIn(formData.username,formData.psw)){
          this.router.navigate(['../'])
          window.location.reload();
      }else{
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Password or email is incorrect ..! ", true ? "Retry" : undefined, config);
      }
          
    }
  }
}

// me signout karana eka 
    // this.afAuth.auth.signOut()

    


    







    





 

 