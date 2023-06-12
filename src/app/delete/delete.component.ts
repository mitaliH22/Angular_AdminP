import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { OperationsService } from '../service/operations.service';
import { UserList, Users } from '../types/types';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})

export class DeleteComponent {
    userList: UserList[] | undefined;
    users: Users[] | undefined | any;

    constructor(private user: OperationsService) {

    user.GetUsers().subscribe((data: any) => {
      this.users = data;
    })
    }

  delete(id: any) {
    this.user.deleteUser(id).subscribe((data: any) => {
      console.log(this.users,data);
    });
  }
}


