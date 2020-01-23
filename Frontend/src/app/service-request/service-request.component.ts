import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule, FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {

  id;
  sub;
  bookingForm: FormGroup;
  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,private fb:FormBuilder,private afs:AngularFirestore) { }

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('serviceid');
    });

    this.bookingForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      date: ['', [Validators.required]],
     time: ['',[Validators.required]]
    })

  }

  onSubmit()
  {
    this.afs.collection('mechanic_requests').add(this.bookingForm.value);
    alert("succuss");
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this._router.navigate(['product']);
  }
}
