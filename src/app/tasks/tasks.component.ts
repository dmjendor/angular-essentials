import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  isAddingTask = false;
  onStartAddTask() {
    this.isAddingTask = true;
  }
  // @Input() name: string | undefined; // the same as
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)!;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    console.log('task', taskData);
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.isAddingTask = false;
  }
}
