import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { OperationsService } from '../service/operations.service';
import { UserList } from '../types/types';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})

export class DeleteComponent {
  userList: UserList[] | undefined;
  constructor(private operations: OperationsService) {
    operations.readOperation().subscribe((data: any) => {
      this.userList = data.users;
    });
  }

  delete(index: number, id: number) {
    console.log(index,id)
    this.operations.deleteOperation(id).subscribe((data: any) => {
      console.log(data);
      this.userList?.splice(index, 1);
    })
  }
}
