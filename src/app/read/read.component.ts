import { Component, PipeTransform } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  providers: [DecimalPipe],
})
export class ReadComponent {
  constructor(private users: AuthService, pipe: DecimalPipe) {}
  data: { id: any; name: string; email: string; gender: string }[] =
    this.users.items;

  search(text: string, pipe: PipeTransform) {
    return this.data.filter((item) => {
      const term = text.toLowerCase();
      return (
        item.name.toLowerCase().includes(term) ||
        pipe.transform(item.email).includes(term) ||
        pipe.transform(item.gender).includes(term)
      );
    });
  }

  filter = new FormControl('', { nonNullable: true });
}


