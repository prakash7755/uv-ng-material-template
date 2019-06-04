import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private profileServ: ProfileService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async handleSubmit(form) {
    const data = form.value;
    try{
      const profileRes:any = await this.profileServ.newUser(data);
      this.router.navigate(['/users'])
    }
    catch(error){
      alert(error.error.message)
      console.log(error)
    }
  }

}
