import { Component, Input, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // ! tells typescript the value will be set outside.
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // Input signals are read only.
  avatar = input.required<string>();
  name = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }
  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {}
}
