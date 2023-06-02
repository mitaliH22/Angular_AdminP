import { Component, PipeTransform } from '@angular/core';
import { OperationsService } from '../service/operations.service';

type UserList = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: { department: string; title: string };
};

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent {
  userList: UserList[] | undefined;
  constructor(private user: OperationsService) {
    user.readOperation().subscribe((data: any) => {
      this.userList = data.users;
      console.log(this.userList);
    });
  }
}


