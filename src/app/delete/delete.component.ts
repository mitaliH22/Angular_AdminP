import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { OperationsService } from '../service/operations.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  constructor(
    private users: AuthService,
    private operations: OperationsService
  ) {}
  data: { id: any; name: string; email: string; gender: string;}[] = this.users.items;

  delete(index: number){
    this.operations.deleteOperation(index);
  }
}
