import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private _userService:UserserviceService ){
    this._userService.userList().subscribe(data=>{
      console.log(data);
    
    })
   
  }

}