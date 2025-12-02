import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input() name: string | undefined; // the same as
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = DUMMY_TASKS;

  constructor(private tasksService: TasksService) {}
  // wouldnt do it this way, as you wouldnt want to instantiate
  // multiple versions of the class
  // private tasksService = new TasksService();

  isAddingTask = false;
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
