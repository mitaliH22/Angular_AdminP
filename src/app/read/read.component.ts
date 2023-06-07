import { Component, PipeTransform } from '@angular/core';
import { OperationsService } from '../service/operations.service';
import { UserList, Users } from '../types/types';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent {
  userList: UserList[] | undefined;
  users: Users[] | undefined;

  constructor(private user: OperationsService) {
    user.readOperation().subscribe((data: any) => {
      this.userList = data.users;

    });

    user.GetUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data);
    })
  }
}


