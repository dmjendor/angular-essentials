import {
  Component,
  Input,
  Output,
  EventEmitter,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // ! tells typescript the value will be set outside.
  // @ is a Decorator
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };

  @Output() select = new EventEmitter<string>();
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>(); // After angular 2020 this is preferred

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
