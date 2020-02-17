import { Component, OnInit } from '@angular/core';

import {FAuthenticationService} from "../../Shared/admin-services/_firebase-services/fireAuth.service";
import {AuthGuard} from "../../Shared/admin-services/_firebase-services/_guard/firebase.authentication.guard";

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  providers: [AuthGuard],
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainComponent implements OnInit{

constructor(public auth: FAuthenticationService){

}

  ngOnInit() {
  }


}
