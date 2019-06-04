import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(
    private userServ: UserService,
    private router: Router,
    private ProfileServ: ProfileService
  ) {
    this.getUserList();
  }

  trackByFn(index, item) {
    return item.id; // unique id corresponding to the item
  }

  getUserList() {
    this.userServ.getUsers()
      .subscribe(
        data => {
          this.users = data;
        }
      )
  }

  goToEditPage(id){
    this.router.navigate([`/users/${id}/edit`])
  }

  async deteleUser(id, i){
    await this.ProfileServ.deleteUser(id);
    this.users.splice(i, 1)
  }

  ngOnInit() {

  }

}
