import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userDetail!: FormGroup;
  constructor(private authService: UserserviceService, private route: Router) {
    this.userDetail = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }
  
  ngOnInit(): void {
  }

  userData() {
    console.log(this.userDetail.value);
    this.authService.loginUser(this.userDetail.value).subscribe(
      (data: any) => {
        localStorage.setItem("jwtToken",data.jwtToken);
        this.route.navigate(['/dashboard']);
      }
    ), (error: any) => {
      console.log(error)
    }
  }
}
