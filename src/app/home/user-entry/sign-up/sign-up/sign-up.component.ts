import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  userRegister!: FormGroup;
  constructor(private _userService: UserserviceService) {
    this.userRegister = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      city: new FormControl(),
      contact: new FormControl()
    })
  }

  userSubmit() {
    console.log(this.userRegister.value);
    this._userService.register(this.userRegister.value).subscribe(
      (data:any) => {
        console.log(data);
      },(error:any)=>{
        console.log(error);
        
      }
    )
  }
}
