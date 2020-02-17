import { Component } from '@angular/core';
import { FAuthenticationService } from '../../Shared/admin-services/_firebase-services/fireAuth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{
  constructor( public auth: FAuthenticationService) { }

  ngOnInit() {

  }


}
