import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  list: String[] = ['HTML', 'CSS', 'JS', 'React', 'Angular', 'Node'];
}
