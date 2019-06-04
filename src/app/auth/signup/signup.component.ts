import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authServ: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async handleSubmit(form) {
    const data = form.value;
    const signupResponse = await this.authServ.signup(data);
    this.router.navigate(['/account/login'])
  }

}
